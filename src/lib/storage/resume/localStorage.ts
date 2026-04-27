import type { ResumeRecord, ResumeStore } from '../types';
import { ResumeStoreError } from '../errors';

const KEY_PREFIX = 'vaif-resume:';

function k(key: string): string {
  return `${KEY_PREFIX}${key}`;
}

type LocalStorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

function ensureLocalStorage(): LocalStorageLike {
  const ls = (globalThis as { localStorage?: LocalStorageLike }).localStorage;
  if (!ls) {
    throw new ResumeStoreError('localStorage is unavailable in this runtime', 'storage_unavailable');
  }
  return ls;
}

/**
 * Browser localStorage adapter. Survives page reload. ~5-10 MB total quota
 * (browser-specific). For files larger than a few MB consider IndexedDB instead.
 */
export function localStorageResumeStore(): ResumeStore {
  return {
    async get(key) {
      const ls = ensureLocalStorage();
      const raw = ls.getItem(k(key));
      if (!raw) return undefined;
      try {
        return JSON.parse(raw) as ResumeRecord;
      } catch (err) {
        throw new ResumeStoreError('failed to parse resume record', 'parse_error', { cause: err });
      }
    },
    async set(key, record) {
      const ls = ensureLocalStorage();
      try {
        ls.setItem(k(key), JSON.stringify(record));
      } catch (err) {
        throw new ResumeStoreError('failed to write resume record', 'write_error', { cause: err });
      }
    },
    async delete(key) {
      const ls = ensureLocalStorage();
      ls.removeItem(k(key));
    },
  };
}
