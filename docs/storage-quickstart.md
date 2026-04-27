# Storage Quickstart

The `@vaif/client/storage` subpath is a tree-shakable upload coordinator with one-shot and multipart strategies, byte-accurate progress, cancellation, pause/resume, durable resume across process restarts, pre-signed URL support, and browser drag-and-drop helpers.

## 3-line hello upload

```ts
import { Vaif } from '@vaif/client';
import { upload } from '@vaif/client/storage';

const vaif = new Vaif({ apiKey: process.env.VAIF_API_KEY });
const { path, etag } = await upload(vaif, { bucket: 'avatars', path: 'me.jpg', file: blob });
```

`upload()` returns an `UploadHandle` — a `Promise<UploadResult>` with extra control methods (`cancel`, `pause`, `resume`). Awaiting it yields `{ path, size, etag, contentType }`.

## One-shot vs multipart

The coordinator picks a strategy based on input size:

| Strategy   | When                                   | Behavior                                                  |
| ---------- | -------------------------------------- | --------------------------------------------------------- |
| One-shot   | Size known and `< multipartThreshold`  | Single `POST /storage/upload` with the bytes              |
| Multipart  | Size `>=` threshold, **or unknown**    | `create` -> N x `part-url` + PUT -> `complete`            |

Default `multipartThreshold` is **5 MB**. Streaming inputs (no known size) always go multipart. Override per call:

```ts
await upload(vaif, {
  bucket: 'videos',
  path: 'demo.mp4',
  file: stream,
  multipartThreshold: 16 * 1024 * 1024, // 16 MB
});
```

## Configuration

```ts
await upload(vaif, {
  bucket: 'docs',
  path: 'report.pdf',
  file: blob,

  // Object metadata
  contentType: 'application/pdf',
  metadata: { authorId: 'u_42', version: '3' },
  cacheControl: 'public, max-age=31536000, immutable',
  upsert: true, // overwrite if path exists

  // Multipart strategy
  multipartThreshold: 5 * 1024 * 1024, // default 5 MB
  chunkSize:          5 * 1024 * 1024, // default 5 MB
  concurrency:        3,               // default 3 parallel parts
});
```

## Progress events

Pass `onProgress` to receive throttled updates (max 30 Hz). Each event includes a 5-second EMA throughput and an ETA:

```ts
await upload(vaif, {
  bucket: 'media',
  path: 'big.zip',
  file: blob,
  onProgress: (e) => {
    console.log(
      `${e.percent}%`,
      `${(e.bytesPerSecond / 1024 / 1024).toFixed(1)} MB/s`,
      `eta=${Math.round(e.estimatedRemainingMs / 1000)}s`,
    );
  },
});
```

`ProgressEvent` shape:

```ts
{
  bytesUploaded: number;
  totalBytes: number;            // 0 if streaming input
  percent: number;               // 0..100
  partsCompleted: number;
  totalParts: number;
  bytesPerSecond: number;        // EMA over 5s
  estimatedRemainingMs: number;  // 0 if unknown
}
```

## Cancellation

Two equivalent ways to cancel — both clean up the server-side multipart and clear any resume record:

```ts
// 1) Handle.cancel()
const handle = upload(vaif, opts);
setTimeout(() => handle.cancel(), 5000);

// 2) AbortSignal
const ac = new AbortController();
upload(vaif, { ...opts, signal: ac.signal });
ac.abort();
```

A cancelled upload rejects with `UploadCancelledError`.

## Pause and resume (in-process)

`handle.pause()` and `handle.resume()` gate in-flight chunk transfers. Useful for "pause on Wi-Fi loss":

```ts
const handle = upload(vaif, opts);
handle.pause();
// ... later
handle.resume();
const result = await handle;
```

## Resumable uploads (across process restarts)

Pass a `resume` config to persist part progress. If the upload is interrupted (crash, browser refresh, lost network), calling `upload()` again with the same key will pick up where it left off — already-uploaded parts are not re-sent.

```ts
import { upload } from '@vaif/client/storage';
import { localStorageResumeStore } from '@vaif/client/storage/resume';

const handle = upload(vaif, {
  bucket: 'videos',
  path: 'lecture.mp4',
  file: largeBlob,
  resume: { key: `lecture-${userId}`, store: localStorageResumeStore() },
});
```

### ResumeStore adapters

Four adapters ship with the SDK at `@vaif/client/storage/resume`:

| Adapter                   | Persistence                | Best for                                              |
| ------------------------- | -------------------------- | ----------------------------------------------------- |
| `memoryResumeStore()`     | Process memory only        | Retry-during-session, tests                           |
| `localStorageResumeStore()` | `window.localStorage`     | Web apps, survives reload, ~5 MB key budget           |
| `indexedDbResumeStore()`  | IndexedDB (`vaif_resumes`) | Web apps with many uploads, no per-domain quota issues |
| `fileResumeStore({ dir })` | JSON files on disk         | Node CLIs, survives process restarts (`~/.vaif/uploads/`) |

The store contract is tiny — implement your own (Redis, Drizzle, SQLite) by satisfying `ResumeStore`:

```ts
interface ResumeStore {
  get(key: string): Promise<ResumeRecord | undefined>;
  set(key: string, record: ResumeRecord): Promise<void>;
  delete(key: string): Promise<void>;
}
```

If the persisted record's `bucket`, `path`, or `totalBytes` no longer match the current call, `upload()` rejects with `ResumeMismatchError` — bump the key when the file changes.

## Pre-signed URL helper

For very large files or compliance setups where the API server should not see the bytes, generate a pre-signed PUT URL and stream directly to the storage backend:

```ts
import { uploadToSignedUrl } from '@vaif/client/storage';

const { url } = await vaif.storage.createUploadUrl({ bucket: 'archives', path: 'q4.tar.gz' });
const { etag } = await uploadToSignedUrl(url, blob, {
  method: 'PUT',
  headers: { 'content-type': 'application/gzip' },
});
```

`POST` policy uploads (S3-style multipart-form) work too — pass `fields` instead of relying on header signing.

## Browser convenience helpers

Import from `@vaif/client/storage/browser`:

```ts
import { uploadFromInput, createDropZone } from '@vaif/client/storage/browser';
```

### File input

```ts
const input = document.querySelector<HTMLInputElement>('#file')!;
const handles = uploadFromInput(input, vaif, {
  bucket: 'inbox',
  pathPrefix: `users/${userId}/`,
  onUpload: (handle, file) => {
    console.log(`uploading ${file.name}`);
    handle.then((res) => console.log('done', res.path));
  },
});
```

`pathPrefix` accepts a string (concatenated with `file.name`) or a function `(file) => string` for full control.

### Drag-and-drop

```ts
const cleanup = createDropZone(dropDiv, vaif, {
  bucket: 'inbox',
  accept: ['image/*', '.pdf'],
  onDragEnter: () => dropDiv.classList.add('hover'),
  onDragLeave: () => dropDiv.classList.remove('hover'),
  onUpload: (handle, file) => trackUpload(handle, file),
});

// Later:
cleanup(); // detaches all listeners
```

`accept` matches each file against three patterns:

| Pattern        | Matches                                  |
| -------------- | ---------------------------------------- |
| `'.pdf'`       | Filename extension (case-insensitive)    |
| `'image/*'`    | MIME prefix wildcard                     |
| `'image/png'`  | Exact MIME type                          |

Files that do not match any pattern are silently ignored on drop.

## Telemetry hooks

All optional, all wrapped in `try/catch` (a throwing handler will not break the upload):

```ts
await upload(vaif, {
  ...opts,
  onUploadStart:     ({ uploadId, totalBytes }) => metrics.start(uploadId, totalBytes),
  onUploadProgress:  (e)                        => metrics.progress(e),  // alias for onProgress
  onUploadRetry:     ({ partNumber, attempt, error }) => metrics.retry(partNumber, attempt),
  onUploadComplete:  ({ uploadId, durationMs }) => metrics.complete(uploadId, durationMs),
  onUploadCancelled: ({ uploadId, bytesUploaded }) => metrics.cancel(uploadId, bytesUploaded),
});
```

## Error model

All errors extend `StorageError` and expose a stable `code` string for branching:

```
StorageError
├── UploadError                     code: 'upload_failed' | 'request_failed'
│   ├── ChunkUploadError            + partNumber, attempts
│   ├── UploadCancelledError        code: 'cancelled'
│   └── UploadAbortedError
├── ResumeError
│   ├── ResumeMismatchError         + reason: 'size' | 'path' | 'expired'
│   └── ResumeStoreError            adapter I/O failed
└── SignedUrlError                  code: 'signed_failed'
```

```ts
import { upload, UploadCancelledError, ResumeMismatchError } from '@vaif/client/storage';

try {
  await upload(vaif, opts);
} catch (err) {
  if (err instanceof UploadCancelledError) return;            // user pressed cancel
  if (err instanceof ResumeMismatchError) {
    // file changed since last attempt — start over with a fresh key
  }
  throw err;
}
```

## Runtime support

| Runtime                    | One-shot | Multipart | Resume adapter            |
| -------------------------- | -------- | --------- | ------------------------- |
| Node >= 18                 | yes      | yes       | `memory`, `file`          |
| Deno                       | yes      | yes       | `memory`                  |
| Bun                        | yes      | yes       | `memory`, `file`          |
| Cloudflare Workers / Edge  | yes      | yes       | `memory` (or custom KV)   |
| Modern browsers            | yes      | yes       | `memory`, `localStorage`, `indexedDb` |
| React Native (with polyfill) | yes    | yes       | `memory`, custom AsyncStorage adapter |

Browser helpers (`uploadFromInput`, `createDropZone`) are exposed at `@vaif/client/storage/browser` and require a DOM. Resume adapters are at `@vaif/client/storage/resume`.
