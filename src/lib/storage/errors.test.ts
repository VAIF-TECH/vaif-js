import { describe, it, expect } from 'vitest';
import {
  StorageError,
  UploadError,
  ChunkUploadError,
  UploadCancelledError,
  UploadAbortedError,
  ResumeError,
  ResumeMismatchError,
  ResumeStoreError,
  SignedUrlError,
} from './errors';

describe('storage error hierarchy', () => {
  it('StorageError is base; subclasses extend correctly', () => {
    expect(new UploadError('x', 'y')).toBeInstanceOf(StorageError);
    expect(new ChunkUploadError('x', 'y', { partNumber: 1, attempts: 3 })).toBeInstanceOf(UploadError);
    expect(new UploadCancelledError()).toBeInstanceOf(UploadError);
    expect(new UploadAbortedError('x', 'y')).toBeInstanceOf(UploadError);
    expect(new ResumeError('x', 'y')).toBeInstanceOf(StorageError);
    expect(new ResumeMismatchError('x', 'y', { reason: 'size' })).toBeInstanceOf(ResumeError);
    expect(new ResumeStoreError('x', 'y')).toBeInstanceOf(ResumeError);
    expect(new SignedUrlError('x', 'y')).toBeInstanceOf(StorageError);
  });

  it('all errors carry code', () => {
    expect(new StorageError('m', 'code-1').code).toBe('code-1');
  });

  it('cause is preserved', () => {
    const cause = new Error('orig');
    const e = new UploadError('x', 'y', { cause });
    expect((e as Error & { cause?: unknown }).cause).toBe(cause);
  });

  it('ChunkUploadError carries partNumber and attempts', () => {
    const e = new ChunkUploadError('failed', 'chunk_failed', { partNumber: 7, attempts: 3 });
    expect(e.partNumber).toBe(7);
    expect(e.attempts).toBe(3);
  });

  it('ResumeMismatchError carries reason', () => {
    const e = new ResumeMismatchError('size mismatch', 'mismatch', { reason: 'size' });
    expect(e.reason).toBe('size');
  });

  it('error.name is set per class', () => {
    expect(new StorageError('x', 'y').name).toBe('StorageError');
    expect(new UploadError('x', 'y').name).toBe('UploadError');
    expect(new ChunkUploadError('x', 'y', { partNumber: 1, attempts: 1 }).name).toBe('ChunkUploadError');
    expect(new UploadCancelledError().name).toBe('UploadCancelledError');
    expect(new ResumeMismatchError('x', 'y', { reason: 'path' }).name).toBe('ResumeMismatchError');
  });

  it('instanceof works through prototype chain', () => {
    function thrower(): never { throw new ChunkUploadError('x', 'y', { partNumber: 1, attempts: 1 }); }
    try { thrower(); } catch (e) {
      expect(e).toBeInstanceOf(ChunkUploadError);
      expect(e).toBeInstanceOf(UploadError);
      expect(e).toBeInstanceOf(StorageError);
      expect(e).toBeInstanceOf(Error);
    }
  });
});
