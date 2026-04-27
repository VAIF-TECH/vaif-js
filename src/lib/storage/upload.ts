import { sliceInput } from './slicer';
import { runMultipart } from './multipart';
import { UploadError } from './errors';
import type { UploadOptions, UploadResult, UploadHandle } from './types';

const DEFAULT_MULTIPART_THRESHOLD = 5 * 1024 * 1024; // 5 MB
const DEFAULT_CHUNK_SIZE = 5 * 1024 * 1024;
const DEFAULT_CONCURRENCY = 3;

type StorageClient = {
  baseUrl: string;
  apiKey?: string;
};

/**
 * Upload a file to the configured storage bucket.
 *
 * Returns a Promise-like handle. Awaiting it yields the `UploadResult`.
 * `handle.cancel()` aborts the upload. `handle.pause()` / `handle.resume()`
 * stop and restart in-flight chunk transfers (multipart only).
 *
 * For inputs smaller than `multipartThreshold` (default 5 MB), uses a
 * single `POST /storage/upload`. Larger or streaming inputs use the
 * multipart flow with `concurrency` chunks in flight at a time.
 */
export function upload(client: StorageClient, opts: UploadOptions): UploadHandle {
  const totalBytes = sliceInput.size(opts.file) ?? 0;
  const threshold = opts.multipartThreshold ?? DEFAULT_MULTIPART_THRESHOLD;

  // Decide one-shot vs multipart. Streaming inputs (size unknown) always go multipart.
  const useMultipart =
    sliceInput.size(opts.file) === undefined || totalBytes >= threshold;

  // Build the work promise
  const promise: Promise<UploadResult> = useMultipart
    ? runMultipart(client, opts, totalBytes, {
        chunkSize: opts.chunkSize ?? DEFAULT_CHUNK_SIZE,
        concurrency: opts.concurrency ?? DEFAULT_CONCURRENCY,
      })
    : runOneShot(client, opts, totalBytes);

  // Construct the handle (Promise + control methods)
  const handle = promise as UploadHandle;
  handle.cancel = async () => {
    // H4 fills this in. For now, no-op.
  };
  handle.pause = () => {
    /* H5 */
  };
  handle.resume = () => {
    /* H5 */
  };
  return handle;
}

async function runOneShot(
  client: StorageClient,
  opts: UploadOptions,
  totalBytes: number,
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

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: buffer as unknown as ArrayBuffer,
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
