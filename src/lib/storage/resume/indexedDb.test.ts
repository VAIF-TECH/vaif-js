import { describe, it, expect, beforeEach } from 'vitest';
import 'fake-indexeddb/auto';
import { indexedDbResumeStore } from './indexedDb';
import type { ResumeRecord } from '../types';

const sample = (): ResumeRecord => ({
  uploadId: 'u1', bucket: 'b', path: 'p',
  totalBytes: 100, contentType: 't',
  parts: [{ partNumber: 1, etag: 'e1', size: 50 }],
  createdAt: 1, updatedAt: 2,
});

describe('indexedDbResumeStore', () => {
  beforeEach(async () => {
    // Reset by deleting the test db
    type Req = {
      onsuccess: (() => void) | null;
      onerror: (() => void) | null;
      onblocked: (() => void) | null;
    };
    const idb = (globalThis as unknown as { indexedDB: { deleteDatabase(name: string): Req } }).indexedDB;
    await new Promise<void>((resolve) => {
      const req = idb.deleteDatabase('vaif_resumes');
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
      req.onblocked = () => resolve();
    });
  });

  it('round-trips set/get', async () => {
    const s = indexedDbResumeStore();
    await s.set('myupload', sample());
    expect(await s.get('myupload')).toEqual(sample());
  });

  it('returns undefined for missing key', async () => {
    const s = indexedDbResumeStore();
    expect(await s.get('nope')).toBeUndefined();
  });

  it('delete removes the key', async () => {
    const s = indexedDbResumeStore();
    await s.set('k', sample());
    await s.delete('k');
    expect(await s.get('k')).toBeUndefined();
  });
});
