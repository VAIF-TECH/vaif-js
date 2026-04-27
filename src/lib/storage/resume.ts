/**
 * ResumeStore adapters bundled with @vaif/client/storage/resume.
 * Pick one based on your runtime + persistence needs.
 */
export { memoryResumeStore } from './resume/memory';
export { localStorageResumeStore } from './resume/localStorage';
export { indexedDbResumeStore } from './resume/indexedDb';
export { fileResumeStore } from './resume/file';
export type { ResumeStore, ResumeRecord } from './types';
