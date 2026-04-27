import type { ResumeRecord, ResumeStore } from '../types';

function clone(r: ResumeRecord): ResumeRecord {
  return { ...r, parts: r.parts.map((p) => ({ ...p })) };
}

/**
 * In-memory ResumeStore. Suitable for retry-during-session use cases (process
 * crash loses state). Default for `upload({ resume: { key, store: memoryResumeStore() } })`.
 */
export function memoryResumeStore(): ResumeStore {
  const map = new Map<string, ResumeRecord>();
  return {
    async get(key) {
      const r = map.get(key);
      return r ? clone(r) : undefined;
    },
    async set(key, record) {
      map.set(key, clone(record));
    },
    async delete(key) {
      map.delete(key);
    },
  };
}
