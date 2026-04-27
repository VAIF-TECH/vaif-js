export { upload } from './upload';
export { uploadToSignedUrl } from './signed-url';

export type { UploadInput } from './slicer';
export type { ProgressEvent } from './progress';
export type {
  UploadOptions,
  UploadResult,
  UploadHandle,
  ResumeRecord,
  ResumeStore,
} from './types';

export {
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
