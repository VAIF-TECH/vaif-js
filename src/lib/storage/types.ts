import type { ProgressEvent } from './progress';
import type { UploadInput } from './slicer';

export type { UploadInput } from './slicer';
export type { ProgressEvent } from './progress';

export type ResumeRecord = {
  uploadId: string;
  bucket: string;
  path: string;
  totalBytes: number;
  contentType: string;
  parts: { partNumber: number; etag: string; size: number }[];
  createdAt: number;
  updatedAt: number;
};

export interface ResumeStore {
  get(key: string): Promise<ResumeRecord | undefined>;
  set(key: string, record: ResumeRecord): Promise<void>;
  delete(key: string): Promise<void>;
}

export type UploadResult = {
  path: string;
  size: number;
  etag: string;
  contentType: string;
};

export type UploadOptions = {
  bucket: string;
  path: string;
  file: UploadInput;
  contentType?: string;
  metadata?: Record<string, string>;
  cacheControl?: string;
  upsert?: boolean;

  // Strategy
  multipartThreshold?: number;
  chunkSize?: number;
  concurrency?: number;

  // Progress
  onProgress?: (e: ProgressEvent) => void;

  // Resume
  resume?: { key: string; store: ResumeStore };

  // Cancellation
  signal?: AbortSignal;
};

/**
 * Returned by `upload()`. Promise-like (await for the result) plus control methods.
 */
export type UploadHandle = Promise<UploadResult> & {
  cancel(): Promise<void>;
  pause(): void;
  resume(): void;
  resumeKey?: string;
  progress?: ProgressEvent;
};
