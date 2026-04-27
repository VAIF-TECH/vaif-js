import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  upload,
  uploadToSignedUrl,
  StorageError,
  UploadError,
  ChunkUploadError,
  UploadCancelledError,
  UploadAbortedError,
  ResumeError,
  ResumeMismatchError,
  ResumeStoreError,
  SignedUrlError,
} from './index';

const INDEX_PATH = join(process.cwd(), 'src/lib/storage/index.ts');

describe('@vaif/client/storage public exports', () => {
  it('exports upload + uploadToSignedUrl as functions', () => {
    expect(typeof upload).toBe('function');
    expect(typeof uploadToSignedUrl).toBe('function');
  });

  it('exports StorageError hierarchy', () => {
    expect(typeof StorageError).toBe('function');
    expect(typeof UploadError).toBe('function');
    expect(typeof ChunkUploadError).toBe('function');
    expect(typeof UploadCancelledError).toBe('function');
    expect(typeof UploadAbortedError).toBe('function');
    expect(typeof ResumeError).toBe('function');
    expect(typeof ResumeMismatchError).toBe('function');
    expect(typeof ResumeStoreError).toBe('function');
    expect(typeof SignedUrlError).toBe('function');

    const cancel = new UploadCancelledError();
    expect(cancel).toBeInstanceOf(UploadError);
    expect(cancel).toBeInstanceOf(StorageError);

    const mismatch = new ResumeMismatchError('x', 'y', { reason: 'size' });
    expect(mismatch).toBeInstanceOf(ResumeError);
    expect(mismatch).toBeInstanceOf(StorageError);

    const signed = new SignedUrlError('x', 'y');
    expect(signed).toBeInstanceOf(StorageError);
  });

  it('does NOT leak internal modules (slicer impl, multipart, concurrency, retry, progress class)', () => {
    const src = readFileSync(INDEX_PATH, 'utf-8');
    expect(src).not.toMatch(/from ['"]\.\/multipart/);
    expect(src).not.toMatch(/from ['"]\.\/concurrency/);
    expect(src).not.toMatch(/from ['"]\.\/retry/);
    expect(src).not.toMatch(/from ['"]\.\/resume\b/);
    // slicer/progress only re-exported as types
    expect(src).toMatch(/export type.*\bUploadInput\b/);
    expect(src).toMatch(/export type.*\bProgressEvent\b/);
  });
});
