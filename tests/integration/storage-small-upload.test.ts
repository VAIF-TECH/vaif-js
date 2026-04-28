/**
 * K7 — Storage integration: small upload uses the one-shot endpoint.
 *
 * Files smaller than `multipartThreshold` (default 5 MB) must POST to
 * /storage/upload as a single request, NOT touch the multipart endpoints.
 */
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { MockMultipartServer } from './mock-multipart-server';
import { upload } from '../../src/lib/storage';

describe('Storage integration — small upload (one-shot)', () => {
  let server: MockMultipartServer;

  beforeAll(async () => {
    server = await MockMultipartServer.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  beforeEach(() => {
    server.reset();
  });

  it('1 KB upload uses one-shot POST /storage/upload, not multipart', async () => {
    const data = new Uint8Array(1024);
    for (let i = 0; i < data.length; i++) data[i] = i & 0xff;

    const handle = upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'photos',
        path: 'small.bin',
        file: data,
        contentType: 'application/octet-stream',
      },
    );
    const result = await handle;

    expect(result.path).toBe('small.bin');
    expect(result.size).toBe(1024);

    const snap = server.snapshot();
    expect(snap.oneShots).toHaveLength(1);
    expect(snap.oneShots[0]).toEqual({ bucket: 'photos', path: 'small.bin', bytes: 1024 });
    // Multipart endpoints must NOT have been hit.
    expect(snap.uploads).toHaveLength(0);
    expect(snap.partPutCount).toBe(0);
  });

  it('respects custom multipartThreshold to force one-shot for slightly larger files', async () => {
    const data = new Uint8Array(8 * 1024); // 8 KB
    const handle = upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'b',
        path: 'medium.bin',
        file: data,
        // Only multipart for files >= 16 KB
        multipartThreshold: 16 * 1024,
      },
    );
    await handle;
    const snap = server.snapshot();
    expect(snap.oneShots).toHaveLength(1);
    expect(snap.uploads).toHaveLength(0);
  });
});
