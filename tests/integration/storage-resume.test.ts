/**
 * K9 — Storage integration: resume a failed multipart upload.
 *
 * First run: server injects a 500 on the 2nd PUT. The SDK persists the
 * record of the part(s) that succeeded before the failure. Second run
 * passes the same `resume.key` + same `store`; the SDK reuses the
 * uploadId from the persisted record and only PUTs the missing parts.
 */
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { MockMultipartServer } from './mock-multipart-server';
import { upload } from '../../src/lib/storage';
import { memoryResumeStore } from '../../src/lib/storage/resume';

describe('Storage integration — resume', () => {
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

  it('resume picks up where the failed run left off and uses the same uploadId', async () => {
    const chunkSize = 64 * 1024;
    const totalBytes = chunkSize * 3;
    const data = new Uint8Array(totalBytes);
    for (let i = 0; i < data.length; i++) data[i] = (i * 11) & 0xff;

    const store = memoryResumeStore();

    // First run: inject a failure on the 2nd part PUT.
    server.setScript({ failNthPartPut: 2 });

    let firstError: Error | null = null;
    try {
      await upload(
        { baseUrl: server.baseUrl, apiKey: 'k' },
        {
          bucket: 'videos',
          path: 'resumable.bin',
          file: data,
          chunkSize,
          multipartThreshold: chunkSize * 2,
          concurrency: 1,
          resume: { key: 'resume-1', store },
        },
      );
    } catch (err) {
      firstError = err as Error;
    }
    expect(firstError).toBeInstanceOf(Error);
    expect(firstError!.message).toMatch(/chunk upload failed|request failed|injected/i);

    // Allow any in-flight stragglers to settle. The SDK does not abort
    // sibling chunk uploads when one fails (see Phase K notes — candidate
    // for future hardening), so a brief drain prevents the resume run's
    // counters from being polluted.
    await new Promise((r) => setTimeout(r, 200));

    const partial = await store.get('resume-1');
    expect(partial).toBeDefined();
    expect(partial!.parts.length).toBeGreaterThanOrEqual(1);
    expect(partial!.parts.some((p) => p.partNumber === 1)).toBe(true);

    const firstUploadId = server.snapshot().uploads[0]!.uploadId;

    // Second run: clear failure script, resume.
    server.setScript({});
    const recordBeforeResume = await store.get('resume-1');
    const alreadyDoneParts = new Set(recordBeforeResume!.parts.map((p) => p.partNumber));

    const result = await upload(
      { baseUrl: server.baseUrl, apiKey: 'k' },
      {
        bucket: 'videos',
        path: 'resumable.bin',
        file: data,
        chunkSize,
        multipartThreshold: chunkSize * 2,
        concurrency: 1,
        resume: { key: 'resume-1', store },
      },
    );

    expect(result.path).toBe('resumable.bin');
    expect(result.size).toBe(totalBytes);

    const snap = server.snapshot();
    // Same uploadId reused — no second multipart create.
    expect(snap.uploads).toHaveLength(1);
    expect(snap.uploads[0]!.uploadId).toBe(firstUploadId);
    // Only the parts NOT in the persisted record get PUT.
    expect(snap.partPutCount).toBe(3 - alreadyDoneParts.size);
    expect(snap.uploads[0]!.parts).toHaveLength(3);
    expect(snap.uploads[0]!.state).toBe('completed');

    // Resume record cleared on success.
    expect(await store.get('resume-1')).toBeUndefined();
  });

  it('resume with mismatched bucket/path throws ResumeMismatchError', async () => {
    const chunkSize = 64 * 1024;
    const data = new Uint8Array(chunkSize * 3);
    const store = memoryResumeStore();

    // Seed a stale record under the same key with a DIFFERENT path.
    await store.set('mismatch-1', {
      uploadId: 'fake-upload',
      bucket: 'videos',
      path: 'OTHER.bin',
      totalBytes: chunkSize * 3,
      contentType: 'application/octet-stream',
      parts: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    let caught: Error | null = null;
    try {
      await upload(
        { baseUrl: server.baseUrl, apiKey: 'k' },
        {
          bucket: 'videos',
          path: 'NEW.bin',
          file: data,
          chunkSize,
          multipartThreshold: chunkSize * 2,
          concurrency: 1,
          resume: { key: 'mismatch-1', store },
        },
      );
    } catch (err) {
      caught = err as Error;
    }
    expect(caught).toBeInstanceOf(Error);
    expect(caught!.name).toMatch(/Resume/);
  });
});
