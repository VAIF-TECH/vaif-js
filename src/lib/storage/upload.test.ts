import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import express, { type Express } from 'express';
import type { Server } from 'http';
import { upload } from './upload';

describe('upload', () => {
  let server: Server;
  let port: number;
  let received: Array<{ method: string; path: string; bytes?: number | undefined; body?: any }>;
  let createCount = 0;
  let partsByUpload: Record<string, Array<{ partNumber: number; bytes: number }>> = {};

  beforeAll(async () => {
    const app: Express = express();
    app.use((req, _res, next) => {
      // Track every request
      let bytes: number | undefined;
      if (
        req.path.endsWith('/upload') ||
        req.path.startsWith('/storage/upload') ||
        req.path.startsWith('/internal/put')
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

    app.put('/internal/put', express.raw({ type: '*/*', limit: '20mb' }), (req, res) => {
      const uploadId = req.query['upload'] as string;
      const partNumber = Number(req.query['part']);
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

    server = app.listen(0);
    await new Promise<void>((r) => server.on('listening', () => r()));
    port = (server.address() as { port: number }).port;
  });

  afterAll(() => new Promise<void>((r) => server.close(() => r())));

  beforeEach(() => {
    received = [];
    createCount = 0;
    partsByUpload = {};
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

  it('uploadHandle is awaitable + has cancel/pause/resume methods (no-op for now)', async () => {
    const data = new Uint8Array(100);
    const handle = upload(fakeClient(), { bucket: 'b', path: 'p', file: data });
    expect(typeof handle.cancel).toBe('function');
    expect(typeof handle.pause).toBe('function');
    expect(typeof handle.resume).toBe('function');
    await handle;
  });
});
