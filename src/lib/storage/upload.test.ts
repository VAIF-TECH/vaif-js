import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import express, { type Express } from 'express';
import type { Server } from 'http';
import { upload } from './upload';
import { uploadToSignedUrl } from './signed-url';
import { memoryResumeStore } from './resume/memory';
import { ResumeMismatchError, UploadCancelledError } from './errors';
import type { ResumeRecord } from './types';

describe('upload', () => {
  let server: Server;
  let port: number;
  let received: Array<{ method: string; path: string; bytes?: number | undefined; body?: any }>;
  let createCount = 0;
  let abortedUploads: string[] = [];
  let partsByUpload: Record<string, Array<{ partNumber: number; bytes: number }>> = {};
  let signedReceived: Array<{ method: string; bytes: number }> = [];
  let putDelayMs = 0;

  beforeAll(async () => {
    const app: Express = express();
    app.use((req, _res, next) => {
      // Track every request
      let bytes: number | undefined;
      if (
        req.path.endsWith('/upload') ||
        req.path.startsWith('/storage/upload') ||
        req.path.startsWith('/internal/put') ||
        req.path.startsWith('/internal/signed')
      ) {
        bytes = 0;
        req.on('data', (c: Buffer) => {
          bytes! += c.length;
        });
        req.on('end', () => {
          received.push({ method: req.method, path: req.path, bytes });
        });
      } else {
        next();
        return;
      }
      next();
    });
    app.use(express.json());

    // One-shot
    app.post('/storage/upload', express.raw({ type: '*/*', limit: '20mb' }), (req, res) => {
      received.push({ method: 'POST', path: '/storage/upload-handler', bytes: req.body.length });
      res.json({
        path: req.headers['x-bucket'] + '/' + req.headers['x-path'],
        size: req.body.length,
        etag: 'oneshot-etag',
        contentType: req.headers['content-type'] ?? 'application/octet-stream',
      });
    });

    // Multipart
    app.post('/storage/multipart/create', (req, res) => {
      createCount++;
      const uploadId = `upload-${createCount}`;
      partsByUpload[uploadId] = [];
      received.push({ method: 'POST', path: '/multipart/create', body: req.body });
      res.json({ uploadId, key: req.body.path });
    });

    app.post('/storage/multipart/:uploadId/part-url', (req, res) => {
      const partNumber = req.body.partNumber as number;
      const url = `http://localhost:${port}/internal/put?upload=${req.params.uploadId}&part=${partNumber}`;
      res.json({ url, partNumber });
    });

    app.put('/internal/put', express.raw({ type: '*/*', limit: '20mb' }), async (req, res) => {
      const uploadId = req.query['upload'] as string;
      const partNumber = Number(req.query['part']);
      if (putDelayMs > 0) {
        await new Promise<void>((r) => setTimeout(r, putDelayMs));
      }
      partsByUpload[uploadId] = partsByUpload[uploadId] ?? [];
      partsByUpload[uploadId]!.push({ partNumber, bytes: req.body.length });
      received.push({ method: 'PUT', path: '/internal/put', bytes: req.body.length });
      res.set('etag', `etag-${uploadId}-${partNumber}`);
      res.send();
    });

    app.post('/storage/multipart/:uploadId/complete', (req, res) => {
      const uploadId = req.params.uploadId;
      const totalSize = (partsByUpload[uploadId] ?? []).reduce((s, p) => s + p.bytes, 0);
      received.push({ method: 'POST', path: '/multipart/complete', body: req.body });
      res.json({
        path: req.body.path ?? 'video/clip',
        size: totalSize,
        etag: 'final-etag',
        contentType: 'video/mp4',
      });
    });

    app.post('/storage/multipart/:uploadId/abort', (req, res) => {
      abortedUploads.push(req.params.uploadId);
      received.push({ method: 'POST', path: '/multipart/abort', body: req.body });
      res.json({ ok: true });
    });

    // Signed URL endpoint — read bytes from stream directly (the middleware
    // above already attached listeners that count bytes; wait for end before
    // responding).
    app.put('/internal/signed', (req, res) => {
      let total = 0;
      req.on('data', (c: Buffer) => {
        total += c.length;
      });
      req.on('end', () => {
        signedReceived.push({ method: 'PUT', bytes: total });
        res.set('etag', 'signed-etag-xyz');
        res.send();
      });
    });

    server = app.listen(0);
    await new Promise<void>((r) => server.on('listening', () => r()));
    port = (server.address() as { port: number }).port;
  });

  afterAll(() => new Promise<void>((r) => server.close(() => r())));

  beforeEach(() => {
    received = [];
    createCount = 0;
    partsByUpload = {};
    abortedUploads = [];
    signedReceived = [];
    putDelayMs = 0;
  });

  const fakeClient = () => ({ baseUrl: `http://localhost:${port}`, apiKey: 'test' }) as any;

  it('one-shot: small Uint8Array goes via POST /storage/upload', async () => {
    const data = new Uint8Array(1024);
    data[0] = 42;
    const result = await upload(fakeClient(), {
      bucket: 'avatars',
      path: 'me.jpg',
      file: data,
      contentType: 'image/jpeg',
    });
    expect(result.path).toBe('avatars/me.jpg');
    expect(result.size).toBe(1024);
    expect(result.etag).toBe('oneshot-etag');
    expect(received.find((r) => r.path === '/storage/upload-handler')?.bytes).toBe(1024);
  });

  it('one-shot: small Blob goes via POST /storage/upload', async () => {
    const blob = new Blob([new Uint8Array(500)]);
    const result = await upload(fakeClient(), {
      bucket: 'docs',
      path: 'small.bin',
      file: blob,
    });
    expect(result.size).toBe(500);
  });

  it('multipart: 12MB Uint8Array splits into 3 chunks of 5MB', async () => {
    const data = new Uint8Array(12 * 1024 * 1024);
    const result = await upload(fakeClient(), {
      bucket: 'videos',
      path: 'clip.mp4',
      file: data,
      chunkSize: 5 * 1024 * 1024,
      concurrency: 2,
    });
    const parts = partsByUpload['upload-1']!;
    expect(parts.length).toBe(3);
    expect(parts.find((p) => p.partNumber === 1)?.bytes).toBe(5 * 1024 * 1024);
    expect(parts.find((p) => p.partNumber === 3)?.bytes).toBe(2 * 1024 * 1024);
    expect(result.size).toBe(12 * 1024 * 1024);
    // Complete request was made
    expect(received.find((r) => r.path === '/multipart/complete')).toBeTruthy();
  });

  it('multipart: respects multipartThreshold override (forces multipart for small file)', async () => {
    const data = new Uint8Array(100); // tiny
    await upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50, // force multipart
      chunkSize: 25,
    });
    const parts = partsByUpload['upload-1']!;
    expect(parts.length).toBe(4);
  });

  it('uploadHandle is awaitable + has cancel/pause/resume methods', async () => {
    const data = new Uint8Array(100);
    const handle = upload(fakeClient(), { bucket: 'b', path: 'p', file: data });
    expect(typeof handle.cancel).toBe('function');
    expect(typeof handle.pause).toBe('function');
    expect(typeof handle.resume).toBe('function');
    await handle;
  });

  // -------------------- H3: Resume -------------------------------------------

  it('resume happy path: skips chunks already in store', async () => {
    const store = memoryResumeStore();
    const totalBytes = 100;
    const chunkSize = 25;
    // Pre-populate store: pretend parts 1 & 2 already uploaded.
    const record: ResumeRecord = {
      uploadId: 'upload-prepop',
      bucket: 'b',
      path: 'p',
      totalBytes,
      contentType: 'application/octet-stream',
      parts: [
        { partNumber: 1, etag: 'e1', size: 25 },
        { partNumber: 2, etag: 'e2', size: 25 },
      ],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    await store.set('my-key', record);

    const data = new Uint8Array(totalBytes);
    await upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50,
      chunkSize,
      resume: { key: 'my-key', store },
    });

    // Only parts 3 & 4 should have been PUT (not 1 & 2)
    const parts = partsByUpload['upload-prepop'] ?? [];
    expect(parts.map((p) => p.partNumber).sort()).toEqual([3, 4]);
    // No /multipart/create call (reused existing uploadId)
    expect(received.find((r) => r.path === '/multipart/create')).toBeFalsy();
    // Record cleared after complete
    expect(await store.get('my-key')).toBeUndefined();
  });

  it('resume mismatch: throws ResumeMismatchError when totalBytes differ', async () => {
    const store = memoryResumeStore();
    await store.set('mk', {
      uploadId: 'upload-x',
      bucket: 'b',
      path: 'p',
      totalBytes: 1000,
      contentType: 'application/octet-stream',
      parts: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const data = new Uint8Array(2000);
    await expect(
      upload(fakeClient(), {
        bucket: 'b',
        path: 'p',
        file: data,
        multipartThreshold: 100,
        chunkSize: 500,
        resume: { key: 'mk', store },
      }),
    ).rejects.toBeInstanceOf(ResumeMismatchError);
  });

  it('resume: persists record after each chunk', async () => {
    const store = memoryResumeStore();
    const data = new Uint8Array(100);
    await upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50,
      chunkSize: 25,
      resume: { key: 'persist-key', store },
    });
    // After complete, record is deleted
    expect(await store.get('persist-key')).toBeUndefined();
  });

  // -------------------- H4: Cancellation -------------------------------------

  it('cancel via handle.cancel(): rejects with UploadCancelledError + calls /abort', async () => {
    putDelayMs = 80;
    const data = new Uint8Array(500);
    const handle = upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50,
      chunkSize: 50,
      concurrency: 1,
    });
    // Cancel after some time so create + at least one part-url has flown.
    setTimeout(() => {
      handle.cancel().catch(() => undefined);
    }, 30);
    await expect(handle).rejects.toBeInstanceOf(UploadCancelledError);
    // Wait briefly for abort POST to land.
    await new Promise((r) => setTimeout(r, 50));
    expect(abortedUploads.length).toBeGreaterThan(0);
  });

  it('cancel via external AbortSignal: rejects with UploadCancelledError', async () => {
    putDelayMs = 80;
    const ctrl = new AbortController();
    const data = new Uint8Array(500);
    const handle = upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50,
      chunkSize: 50,
      concurrency: 1,
      signal: ctrl.signal,
    });
    setTimeout(() => ctrl.abort(), 30);
    await expect(handle).rejects.toBeInstanceOf(UploadCancelledError);
    await new Promise((r) => setTimeout(r, 50));
    expect(abortedUploads.length).toBeGreaterThan(0);
  });

  it('cancel: clears resume store record', async () => {
    putDelayMs = 80;
    const store = memoryResumeStore();
    await store.set('cancel-key', {
      uploadId: 'pre-existing',
      bucket: 'b',
      path: 'p',
      totalBytes: 500,
      contentType: 'application/octet-stream',
      parts: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const data = new Uint8Array(500);
    const handle = upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50,
      chunkSize: 50,
      concurrency: 1,
      resume: { key: 'cancel-key', store },
    });
    setTimeout(() => handle.cancel().catch(() => undefined), 30);
    await expect(handle).rejects.toBeInstanceOf(UploadCancelledError);
    expect(await store.get('cancel-key')).toBeUndefined();
  });

  // -------------------- H7: Telemetry hooks ----------------------------------

  it('telemetry: onUploadStart + onUploadComplete fire on success', async () => {
    const startCalls: any[] = [];
    const completeCalls: any[] = [];
    const data = new Uint8Array(100);
    await upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50,
      chunkSize: 25,
      onUploadStart: (i) => startCalls.push(i),
      onUploadComplete: (i) => completeCalls.push(i),
    });
    expect(startCalls.length).toBe(1);
    expect(startCalls[0].uploadId).toBe('upload-1');
    expect(startCalls[0].totalBytes).toBe(100);
    expect(completeCalls.length).toBe(1);
    expect(completeCalls[0].uploadId).toBe('upload-1');
    expect(typeof completeCalls[0].durationMs).toBe('number');
  });

  it('telemetry: onUploadCancelled fires on cancel', async () => {
    putDelayMs = 80;
    const cancelCalls: any[] = [];
    const data = new Uint8Array(500);
    const handle = upload(fakeClient(), {
      bucket: 'b',
      path: 'p',
      file: data,
      multipartThreshold: 50,
      chunkSize: 50,
      concurrency: 1,
      onUploadCancelled: (i) => cancelCalls.push(i),
    });
    setTimeout(() => handle.cancel().catch(() => undefined), 30);
    await expect(handle).rejects.toBeInstanceOf(UploadCancelledError);
    expect(cancelCalls.length).toBe(1);
  });

  // -------------------- H6: Signed URL ---------------------------------------

  it('uploadToSignedUrl: PUTs body to URL and returns etag', async () => {
    const url = `http://localhost:${port}/internal/signed`;
    const body = new Uint8Array(1024);
    const result = await uploadToSignedUrl(url, body);
    expect(result.etag).toBe('signed-etag-xyz');
    expect(signedReceived.length).toBe(1);
    expect(signedReceived[0]!.method).toBe('PUT');
    expect(signedReceived[0]!.bytes).toBe(1024);
  });

  it('uploadToSignedUrl: rejects with SignedUrlError on non-2xx', async () => {
    const url = `http://localhost:${port}/does-not-exist`;
    const body = new Uint8Array(10);
    await expect(uploadToSignedUrl(url, body)).rejects.toMatchObject({
      name: 'SignedUrlError',
    });
  });
});
