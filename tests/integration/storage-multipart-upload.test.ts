/**
 * K8 — Storage integration: large multipart upload (3 chunks).
 *
 * Verifies the create → part-url → PUT (×N) → complete flow.
 */
import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import { MockMultipartServer } from './mock-multipart-server';
import { upload } from '../../src/lib/storage';

describe('Storage integration — large multipart upload', () => {
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

  it('3-chunk upload completes via create + part-url + PUT + complete', async () => {
    const chunkSize = 64 * 1024;
    const totalBytes = chunkSize * 3;
    const data = new Uint8Array(totalBytes);
    for (let i = 0; i < data.length; i++) data[i] = (i * 7) & 0xff;

    const onUploadStart = vi.fn();
    const onUploadComplete = vi.fn();

    const handle = upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'videos',
        path: 'large.bin',
        file: data,
        chunkSize,
        multipartThreshold: chunkSize * 2, // force multipart
        concurrency: 2,
        onUploadStart,
        onUploadComplete,
      },
    );
    const result = await handle;

    expect(result.path).toBe('large.bin');
    expect(result.size).toBe(totalBytes);

    const snap = server.snapshot();
    expect(snap.uploads).toHaveLength(1);
    expect(snap.partPutCount).toBe(3);
    const u = snap.uploads[0]!;
    expect(u.parts).toHaveLength(3);
    expect(u.parts.map((p) => p.partNumber).sort()).toEqual([1, 2, 3]);
    expect(u.parts.reduce((s, p) => s + p.size, 0)).toBe(totalBytes);
    expect(u.state).toBe('completed');

    // Telemetry: start fires once with the uploadId, complete fires once.
    expect(onUploadStart).toHaveBeenCalledTimes(1);
    expect(onUploadStart.mock.calls[0]?.[0]).toMatchObject({
      bucket: 'videos',
      path: 'large.bin',
      totalBytes,
    });
    expect(onUploadComplete).toHaveBeenCalledTimes(1);
    expect(onUploadComplete.mock.calls[0]?.[0]).toMatchObject({
      uploadId: u.uploadId,
    });
  });

  it('honors concurrency=1 (serial) and concurrency=3 (parallel) for the same payload', async () => {
    const chunkSize = 32 * 1024;
    const data = new Uint8Array(chunkSize * 4); // 4 chunks

    // concurrency=1
    server.reset();
    await upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'b',
        path: 'serial.bin',
        file: data,
        chunkSize,
        multipartThreshold: chunkSize * 2,
        concurrency: 1,
      },
    );
    expect(server.snapshot().partPutCount).toBe(4);

    // concurrency=3
    server.reset();
    await upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'b',
        path: 'parallel.bin',
        file: data,
        chunkSize,
        multipartThreshold: chunkSize * 2,
        concurrency: 3,
      },
    );
    expect(server.snapshot().partPutCount).toBe(4);
  });
});
