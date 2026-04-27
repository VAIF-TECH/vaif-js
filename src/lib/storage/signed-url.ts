import { SignedUrlError } from './errors';
import type { ProgressEvent } from './progress';

/**
 * Upload a Blob/Uint8Array directly to a pre-signed URL (e.g., S3-compatible
 * PUT URL returned by `vaif.storage.createUploadUrl`). Bypasses the API server
 * for the bytes — useful for very large files.
 */
export async function uploadToSignedUrl(
  url: string,
  body: Blob | Uint8Array,
  opts: {
    method?: 'PUT' | 'POST';
    headers?: Record<string, string>;
    fields?: Record<string, string>; // for POST policy uploads
    onProgress?: (e: ProgressEvent) => void;
    signal?: AbortSignal;
  } = {},
): Promise<{ etag?: string }> {
  const method = opts.method ?? 'PUT';

  let payload: FormData | Blob | ArrayBuffer;
  if (method === 'POST' && opts.fields) {
    const fd = new FormData();
    for (const [k, v] of Object.entries(opts.fields)) fd.append(k, v);
    fd.append('file', body instanceof Blob ? body : new Blob([body]));
    payload = fd;
  } else {
    payload = body instanceof Blob ? body : (body as unknown as ArrayBuffer);
  }

  const res = await fetch(url, {
    method,
    headers: opts.headers ?? {},
    body: payload,
    signal: opts.signal,
  } as RequestInit);
  if (!res.ok) {
    throw new SignedUrlError(
      `signed URL upload failed: ${res.status} ${res.statusText}`,
      'signed_failed',
    );
  }
  const etag = res.headers.get('etag');
  return etag ? { etag } : {};
}
