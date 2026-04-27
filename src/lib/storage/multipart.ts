import { sliceInput } from './slicer';
import { runConcurrent } from './concurrency';
import { ChunkUploadError, UploadError } from './errors';
import type { UploadOptions, UploadResult } from './types';

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

/**
 * Multipart coordinator.
 *
 * 1. POST /storage/multipart/create  → uploadId
 * 2. For each chunk: POST /storage/multipart/{uploadId}/part-url → url, then PUT chunk to url
 * 3. POST /storage/multipart/{uploadId}/complete with collected etags
 *
 * Chunks run with `concurrency` workers. Slicer streams chunks lazily so memory
 * stays bounded for very large files.
 */
export async function runMultipart(
  client: StorageClient,
  opts: UploadOptions,
  _totalBytes: number,
  runOpts: MultipartRunOptions,
): Promise<UploadResult> {
  // 1) Create
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
  });

  // 2) Slice + collect part jobs
  const chunks: Array<{ partNumber: number; bytes: Uint8Array }> = [];
  let partNumber = 1;
  for await (const chunk of sliceInput(opts.file, runOpts.chunkSize)) {
    // Copy out of subarray view so the underlying buffer isn't held longer than necessary.
    chunks.push({ partNumber: partNumber++, bytes: new Uint8Array(chunk) });
  }

  // Per-part job: get a signed URL, PUT bytes, capture etag.
  const jobs = chunks.map(
    (c) =>
      async (): Promise<{ partNumber: number; etag: string; size: number }> => {
        const partUrlReq = new URL(
          `/storage/multipart/${encodeURIComponent(create.uploadId)}/part-url`,
          client.baseUrl,
        ).toString();
        const partUrl = await jsonFetch<PartUrlResponse>(partUrlReq, {
          method: 'POST',
          headers: { 'content-type': 'application/json', ...authHeaders(client) },
          body: JSON.stringify({ partNumber: c.partNumber }),
        });

        const putRes = await fetch(partUrl.url, {
          method: 'PUT',
          headers: { 'content-type': opts.contentType ?? 'application/octet-stream' },
          body: c.bytes as unknown as ArrayBuffer,
        });
        if (!putRes.ok) {
          throw new ChunkUploadError(`chunk upload failed: ${putRes.status}`, 'chunk_failed', {
            partNumber: c.partNumber,
            attempts: 1,
          });
        }
        const etag = putRes.headers.get('etag') ?? `${create.uploadId}-${c.partNumber}`;
        return { partNumber: c.partNumber, etag, size: c.bytes.length };
      },
  );

  const partResults = await runConcurrent(jobs, runOpts.concurrency);
  // Sort by partNumber to ensure complete request has them in order.
  partResults.sort((a, b) => a.partNumber - b.partNumber);

  // 3) Complete
  const completeUrl = new URL(
    `/storage/multipart/${encodeURIComponent(create.uploadId)}/complete`,
    client.baseUrl,
  ).toString();
  const complete = await jsonFetch<CompleteResponse>(completeUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...authHeaders(client) },
    body: JSON.stringify({
      uploadId: create.uploadId,
      bucket: opts.bucket,
      path: opts.path,
      parts: partResults.map((p) => ({
        partNumber: p.partNumber,
        etag: p.etag,
        size: p.size,
      })),
    }),
  });

  return complete;
}
