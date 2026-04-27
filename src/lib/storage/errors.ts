export type StorageErrorOptions = { cause?: unknown };

export class StorageError extends Error {
  code: string;
  constructor(message: string, code: string, opts: StorageErrorOptions = {}) {
    super(message);
    this.name = 'StorageError';
    this.code = code;
    if (opts.cause !== undefined) {
      (this as Error & { cause?: unknown }).cause = opts.cause;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class UploadError extends StorageError {
  constructor(message: string, code: string, opts: StorageErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'UploadError';
  }
}

export class ChunkUploadError extends UploadError {
  partNumber: number;
  attempts: number;
  constructor(
    message: string,
    code: string,
    opts: StorageErrorOptions & { partNumber: number; attempts: number },
  ) {
    super(message, code, opts);
    this.name = 'ChunkUploadError';
    this.partNumber = opts.partNumber;
    this.attempts = opts.attempts;
  }
}

export class UploadCancelledError extends UploadError {
  constructor(message = 'Upload cancelled', code = 'cancelled', opts: StorageErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'UploadCancelledError';
  }
}

export class UploadAbortedError extends UploadError {
  constructor(message: string, code: string, opts: StorageErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'UploadAbortedError';
  }
}

export class ResumeError extends StorageError {
  constructor(message: string, code: string, opts: StorageErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'ResumeError';
  }
}

export class ResumeMismatchError extends ResumeError {
  reason: 'size' | 'path' | 'expired';
  constructor(
    message: string,
    code: string,
    opts: StorageErrorOptions & { reason: 'size' | 'path' | 'expired' },
  ) {
    super(message, code, opts);
    this.name = 'ResumeMismatchError';
    this.reason = opts.reason;
  }
}

export class ResumeStoreError extends ResumeError {
  constructor(message: string, code: string, opts: StorageErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'ResumeStoreError';
  }
}

export class SignedUrlError extends StorageError {
  constructor(message: string, code: string, opts: StorageErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'SignedUrlError';
  }
}
