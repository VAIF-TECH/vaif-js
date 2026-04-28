/**
 * K10 — Storage integration: cancel a multipart upload mid-flight.
 *
 * `handle.cancel()` aborts the internal AbortController, which:
 *   - Causes the in-flight chunk fetch to throw an AbortError
 *   - Triggers a best-effort POST /storage/multipart/:id/abort
 *   - Clears the resume record from the configured store
 *   - Causes the upload Promise to reject with UploadCancelledError
 */
import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import { MockMultipartServer } from './mock-multipart-server';
import { upload, UploadCancelledError } from '../../src/lib/storage';
import { memoryResumeStore } from '../../src/lib/storage/resume';

async function waitFor(predicate: () => boolean, timeoutMs = 1000): Promise<void> {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`waitFor timed out after ${timeoutMs}ms`);
    }
    await new Promise((r) => setTimeout(r, 5));
  }
}

describe('Storage integration — cancel', () => {
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

  it('handle.cancel() aborts mid-flight, issues abort POST, clears resume record', async () => {
    const chunkSize = 64 * 1024;
    const totalBytes = chunkSize * 3;
    const data = new Uint8Array(totalBytes);

    const store = memoryResumeStore();
    const onUploadCancelled = vi.fn();

    // Add latency so we can cancel between part-url calls.
    server.setScript({ delayPartUrlMs: 80 });

    const handle = upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'videos',
        path: 'cancelled.bin',
        file: data,
        chunkSize,
        multipartThreshold: chunkSize * 2,
        concurrency: 1,
        resume: { key: 'cancel-1', store },
        onUploadCancelled,
      },
    );

    // Wait for the multipart create to complete server-side, then yield so
    // the SDK has time to record the uploadId in its closure (setUploadId
    // is invoked AFTER the create POST returns to the SDK). Without the
    // yield, cancel() can race the closure write and skip the abort POST.
    await waitFor(() => server.snapshot().uploads.length === 1, 1_000);
    await new Promise((r) => setTimeout(r, 50));
    await handle.cancel();

    let caught: Error | null = null;
    try {
      await handle;
    } catch (err) {
      caught = err as Error;
    }
    expect(caught).toBeInstanceOf(UploadCancelledError);

    // Resume record cleared on cancel.
    expect(await store.get('cancel-1')).toBeUndefined();

    // Mock observed an abort POST → upload state='aborted'.
    await waitFor(
      () => server.snapshot().uploads[0]?.state === 'aborted',
      1_000,
    );
    const snap = server.snapshot();
    expect(snap.uploads).toHaveLength(1);
    expect(snap.uploads[0]!.state).toBe('aborted');

    // Telemetry: onUploadCancelled fired.
    expect(onUploadCancelled).toHaveBeenCalledTimes(1);
  });

  it('external AbortSignal aborts the upload', async () => {
    const chunkSize = 64 * 1024;
    const data = new Uint8Array(chunkSize * 3);
    const store = memoryResumeStore();

    server.setScript({ delayPartUrlMs: 80 });

    const ac = new AbortController();
    const handle = upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'b',
        path: 'sig.bin',
        file: data,
        chunkSize,
        multipartThreshold: chunkSize * 2,
        concurrency: 1,
        signal: ac.signal,
        resume: { key: 'sig-1', store },
      },
    );

    await waitFor(() => server.snapshot().uploads.length === 1, 1_000);
    ac.abort();

    let caught: Error | null = null;
    try {
      await handle;
    } catch (err) {
      caught = err as Error;
    }
    expect(caught).toBeInstanceOf(UploadCancelledError);
    expect(await store.get('sig-1')).toBeUndefined();
  });
});
