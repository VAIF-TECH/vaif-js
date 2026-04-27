import { sliceInput } from './slicer';
import { runMultipart, type MultipartControl } from './multipart';
import { UploadCancelledError, UploadError } from './errors';
import type { UploadOptions, UploadResult, UploadHandle } from './types';

const DEFAULT_MULTIPART_THRESHOLD = 5 * 1024 * 1024; // 5 MB
const DEFAULT_CHUNK_SIZE = 5 * 1024 * 1024;
const DEFAULT_CONCURRENCY = 3;

type StorageClient = {
  baseUrl: string;
  apiKey?: string;
};

function authHeaders(client: StorageClient): Record<string, string> {
  return client.apiKey ? { authorization: `Bearer ${client.apiKey}` } : {};
}

/**
 * Upload a file to the configured storage bucket.
 *
 * Returns a Promise-like handle. Awaiting it yields the `UploadResult`.
 * `handle.cancel()` aborts the upload. `handle.pause()` / `handle.resume()`
 * stop and restart in-flight chunk transfers (multipart only).
 */
export function upload(client: StorageClient, opts: UploadOptions): UploadHandle {
  const totalBytes = sliceInput.size(opts.file) ?? 0;
  const threshold = opts.multipartThreshold ?? DEFAULT_MULTIPART_THRESHOLD;

  const useMultipart =
    sliceInput.size(opts.file) === undefined || totalBytes >= threshold;

  // Internal AbortController unifies external signal + handle.cancel()
  const controller = new AbortController();
  if (opts.signal) {
    if (opts.signal.aborted) controller.abort();
    else opts.signal.addEventListener('abort', () => controller.abort(), { once: true });
  }

  let paused = false;
  let uploadId = '';
  let bytesUploaded = 0;
  const startedAt = Date.now();

  const control: MultipartControl = {
    signal: controller.signal,
    isPaused: () => paused,
    setUploadId: (id) => {
      uploadId = id;
    },
    setBytesUploaded: (n) => {
      bytesUploaded = n;
    },
  };

  const work = (async (): Promise<UploadResult> => {
    try {
      if (useMultipart) {
        const result = await runMultipart(client, opts, totalBytes, {
          chunkSize: opts.chunkSize ?? DEFAULT_CHUNK_SIZE,
          concurrency: opts.concurrency ?? DEFAULT_CONCURRENCY,
        }, control);
        try {
          opts.onUploadComplete?.({
            uploadId,
            result,
            durationMs: Date.now() - startedAt,
          });
        } catch {
          /* ignore */
        }
        return result;
      } else {
        const result = await runOneShot(client, opts, totalBytes, controller.signal);
        try {
          opts.onUploadComplete?.({
            uploadId: uploadId || 'oneshot',
            result,
            durationMs: Date.now() - startedAt,
          });
        } catch {
          /* ignore */
        }
        return result;
      }
    } catch (err) {
      if (controller.signal.aborted || err instanceof UploadCancelledError) {
        // Best-effort: abort server-side multipart + clear resume record.
        if (uploadId) {
          try {
            const abortUrl = new URL(
              `/storage/multipart/${encodeURIComponent(uploadId)}/abort`,
              client.baseUrl,
            ).toString();
            await fetch(abortUrl, {
              method: 'POST',
              headers: { 'content-type': 'application/json', ...authHeaders(client) },
              body: JSON.stringify({ uploadId }),
            }).catch(() => undefined);
          } catch {
            /* ignore */
          }
        }
        if (opts.resume) {
          try {
            await opts.resume.store.delete(opts.resume.key);
          } catch {
            /* ignore */
          }
        }
        try {
          opts.onUploadCancelled?.({ uploadId, bytesUploaded });
        } catch {
          /* ignore */
        }
        throw err instanceof UploadCancelledError ? err : new UploadCancelledError();
      }
      throw err;
    }
  })();

  // Cast through unknown to attach control methods to the Promise.
  const handle = work as unknown as UploadHandle;
  handle.cancel = async () => {
    controller.abort();
    // Allow microtasks to settle (the promise's catch handler does the abort POST + delete).
    try {
      await work.catch(() => undefined);
    } catch {
      /* ignore */
    }
  };
  handle.pause = () => {
    paused = true;
  };
  handle.resume = () => {
    paused = false;
  };
  if (opts.resume) handle.resumeKey = opts.resume.key;
  return handle;
}

async function runOneShot(
  client: StorageClient,
  opts: UploadOptions,
  totalBytes: number,
  signal: AbortSignal,
): Promise<UploadResult> {
  // Materialize the input into a single buffer.
  const buffer = new Uint8Array(totalBytes);
  let offset = 0;
  for await (const chunk of sliceInput(opts.file, totalBytes || 1)) {
    buffer.set(chunk, offset);
    offset += chunk.length;
  }

  const url = new URL('/storage/upload', client.baseUrl).toString();
  const headers: Record<string, string> = {
    'content-type': opts.contentType ?? 'application/octet-stream',
    'x-bucket': opts.bucket,
    'x-path': opts.path,
  };
  if (client.apiKey) headers['authorization'] = `Bearer ${client.apiKey}`;
  if (opts.cacheControl) headers['cache-control'] = opts.cacheControl;
  if (opts.upsert) headers['x-upsert'] = 'true';
  if (opts.metadata) headers['x-metadata'] = JSON.stringify(opts.metadata);

  // Telemetry: onUploadStart for one-shot
  try {
    opts.onUploadStart?.({
      uploadId: 'oneshot',
      bucket: opts.bucket,
      path: opts.path,
      totalBytes,
    });
  } catch {
    /* ignore */
  }

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: buffer as unknown as ArrayBuffer,
    signal,
  });
  if (!res.ok) {
    let detail = '';
    try {
      detail = ': ' + (await res.text()).slice(0, 200);
    } catch {
      /* ignore */
    }
    throw new UploadError(
      `upload failed: ${res.status} ${res.statusText}${detail}`,
      'upload_failed',
    );
  }
  return (await res.json()) as UploadResult;
}
