import { sliceInput } from './slicer';
import { ChunkUploadError, UploadCancelledError, UploadError, ResumeMismatchError } from './errors';
import type { UploadOptions, UploadResult, ResumeRecord } from './types';
import pLimit from 'p-limit';

type StorageClient = {
  baseUrl: string;
  apiKey?: string;
};

type MultipartRunOptions = {
  chunkSize: number;
  concurrency: number;
};

type CreateResponse = { uploadId: string; key: string };
type PartUrlResponse = { url: string; partNumber: number };
type CompleteResponse = UploadResult;

export type MultipartControl = {
  signal: AbortSignal;
  isPaused: () => boolean;
  setUploadId?: (uploadId: string) => void;
  setBytesUploaded?: (n: number) => void;
};

function authHeaders(client: StorageClient): Record<string, string> {
  return client.apiKey ? { authorization: `Bearer ${client.apiKey}` } : {};
}

async function jsonFetch<T>(url: string, init: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    let detail = '';
    try {
      detail = ': ' + (await res.text()).slice(0, 200);
    } catch {
      /* ignore */
    }
    throw new UploadError(
      `request failed: ${res.status} ${res.statusText}${detail}`,
      'request_failed',
    );
  }
  return (await res.json()) as T;
}

function isAbortError(err: unknown): boolean {
  return (
    err instanceof Error &&
    (err.name === 'AbortError' || (err as { code?: string }).code === 'ABORT_ERR')
  );
}

async function waitWhilePaused(ctrl: MultipartControl): Promise<void> {
  while (ctrl.isPaused()) {
    if (ctrl.signal.aborted) return;
    await new Promise((r) => setTimeout(r, 25));
  }
}

/**
 * Multipart coordinator with resume, cancellation, pause/resume, and telemetry.
 */
export async function runMultipart(
  client: StorageClient,
  opts: UploadOptions,
  totalBytes: number,
  runOpts: MultipartRunOptions,
  control: MultipartControl,
): Promise<UploadResult> {
  const startedAt = Date.now();
  const resume = opts.resume;
  let resumed: ResumeRecord | undefined;

  if (resume) {
    try {
      resumed = await resume.store.get(resume.key);
    } catch (err) {
      // Treat read errors as no record (best-effort resume).
      resumed = undefined;
      // But surface storage errors that look fatal (will not throw — best effort)
      if (process.env['DEBUG']) console.error('[storage/resume] get failed', err);
    }
    if (resumed) {
      if (
        resumed.bucket !== opts.bucket ||
        resumed.path !== opts.path ||
        resumed.totalBytes !== totalBytes
      ) {
        throw new ResumeMismatchError(
          `resume record mismatch (bucket/path/totalBytes differ)`,
          'resume_mismatch',
          {
            reason:
              resumed.bucket !== opts.bucket || resumed.path !== opts.path ? 'path' : 'size',
          },
        );
      }
    }
  }

  if (control.signal.aborted) {
    throw new UploadCancelledError();
  }

  // 1) Create (or reuse from resume record)
  let uploadId: string;
  if (resumed) {
    uploadId = resumed.uploadId;
  } else {
    const createUrl = new URL('/storage/multipart/create', client.baseUrl).toString();
    const create = await jsonFetch<CreateResponse>(createUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeaders(client) },
      body: JSON.stringify({
        bucket: opts.bucket,
        path: opts.path,
        contentType: opts.contentType ?? 'application/octet-stream',
        ...(opts.metadata ? { metadata: opts.metadata } : {}),
      }),
      signal: control.signal,
    });
    uploadId = create.uploadId;
  }
  control.setUploadId?.(uploadId);

  // Telemetry: onUploadStart
  try {
    opts.onUploadStart?.({
      uploadId,
      bucket: opts.bucket,
      path: opts.path,
      totalBytes,
    });
  } catch {
    /* ignore handler errors */
  }

  // 2) Slice + collect part jobs
  const chunks: Array<{ partNumber: number; bytes: Uint8Array }> = [];
  let partNumber = 1;
  for await (const chunk of sliceInput(opts.file, runOpts.chunkSize)) {
    chunks.push({ partNumber: partNumber++, bytes: new Uint8Array(chunk) });
  }

  const completedParts: Array<{ partNumber: number; etag: string; size: number }> = [];
  if (resumed) {
    for (const p of resumed.parts) completedParts.push({ ...p });
  }
  const completedSet = new Set(completedParts.map((p) => p.partNumber));
  let bytesUploaded = completedParts.reduce((s, p) => s + p.size, 0);
  control.setBytesUploaded?.(bytesUploaded);

  const persistRecord = async () => {
    if (!resume) return;
    const record: ResumeRecord = {
      uploadId,
      bucket: opts.bucket,
      path: opts.path,
      totalBytes,
      contentType: opts.contentType ?? 'application/octet-stream',
      parts: completedParts.slice().sort((a, b) => a.partNumber - b.partNumber),
      createdAt: resumed?.createdAt ?? startedAt,
      updatedAt: Date.now(),
    };
    try {
      await resume.store.set(resume.key, record);
    } catch (err) {
      if (process.env['DEBUG']) console.error('[storage/resume] set failed', err);
    }
  };

  const limit = pLimit(runOpts.concurrency);
  const pending = chunks.filter((c) => !completedSet.has(c.partNumber));

  const work = pending.map((c) =>
    limit(async () => {
      // Pause gate
      await waitWhilePaused(control);
      if (control.signal.aborted) throw new UploadCancelledError();

      const partUrlReq = new URL(
        `/storage/multipart/${encodeURIComponent(uploadId)}/part-url`,
        client.baseUrl,
      ).toString();
      const partUrl = await jsonFetch<PartUrlResponse>(partUrlReq, {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...authHeaders(client) },
        body: JSON.stringify({ partNumber: c.partNumber }),
        signal: control.signal,
      });

      if (control.signal.aborted) throw new UploadCancelledError();

      let putRes: Response;
      try {
        putRes = await fetch(partUrl.url, {
          method: 'PUT',
          headers: { 'content-type': opts.contentType ?? 'application/octet-stream' },
          body: c.bytes as unknown as ArrayBuffer,
          signal: control.signal,
        });
      } catch (err) {
        if (isAbortError(err) || control.signal.aborted) throw new UploadCancelledError();
        throw err;
      }

      if (!putRes.ok) {
        throw new ChunkUploadError(`chunk upload failed: ${putRes.status}`, 'chunk_failed', {
          partNumber: c.partNumber,
          attempts: 1,
        });
      }
      const etag = putRes.headers.get('etag') ?? `${uploadId}-${c.partNumber}`;
      const finished = { partNumber: c.partNumber, etag, size: c.bytes.length };
      completedParts.push(finished);
      bytesUploaded += c.bytes.length;
      control.setBytesUploaded?.(bytesUploaded);
      await persistRecord();
      return finished;
    }),
  );

  try {
    await Promise.all(work);
  } catch (err) {
    if (control.signal.aborted || err instanceof UploadCancelledError) {
      throw new UploadCancelledError();
    }
    throw err;
  }

  if (control.signal.aborted) throw new UploadCancelledError();

  // 3) Complete
  const completeUrl = new URL(
    `/storage/multipart/${encodeURIComponent(uploadId)}/complete`,
    client.baseUrl,
  ).toString();
  completedParts.sort((a, b) => a.partNumber - b.partNumber);
  const complete = await jsonFetch<CompleteResponse>(completeUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...authHeaders(client) },
    body: JSON.stringify({
      uploadId,
      bucket: opts.bucket,
      path: opts.path,
      parts: completedParts.map((p) => ({
        partNumber: p.partNumber,
        etag: p.etag,
        size: p.size,
      })),
    }),
    signal: control.signal,
  });

  if (resume) {
    try {
      await resume.store.delete(resume.key);
    } catch {
      /* ignore */
    }
  }

  return complete;
}
