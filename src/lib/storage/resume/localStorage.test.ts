import { describe, it, expect, beforeEach, vi } from 'vitest';
import { localStorageResumeStore } from './localStorage';
import type { ResumeRecord } from '../types';

const sample = (): ResumeRecord => ({
  uploadId: 'u1', bucket: 'b', path: 'p',
  totalBytes: 100, contentType: 't',
  parts: [], createdAt: 1, updatedAt: 2,
});

describe('localStorageResumeStore', () => {
  beforeEach(() => {
    const map = new Map<string, string>();
    vi.stubGlobal('localStorage', {
      getItem: (k: string) => map.get(k) ?? null,
      setItem: (k: string, v: string) => { map.set(k, v); },
      removeItem: (k: string) => { map.delete(k); },
      clear: () => map.clear(),
      get length() { return map.size; },
      key: (i: number) => Array.from(map.keys())[i] ?? null,
    });
  });

  it('round-trips set/get under a prefixed key', async () => {
    const s = localStorageResumeStore();
    await s.set('myupload', sample());
    expect(await s.get('myupload')).toEqual(sample());
    expect((globalThis as unknown as { localStorage: { getItem(k: string): string | null } }).localStorage.getItem('vaif-resume:myupload')).not.toBeNull();
  });

  it('returns undefined for missing or unrelated keys', async () => {
    const s = localStorageResumeStore();
    expect(await s.get('nope')).toBeUndefined();
    (globalThis as unknown as { localStorage: { setItem(k: string, v: string): void } }).localStorage.setItem('unrelated', 'data'); // not under prefix
    expect(await s.get('unrelated')).toBeUndefined();
  });

  it('delete removes the key', async () => {
    const s = localStorageResumeStore();
    await s.set('k', sample());
    await s.delete('k');
    expect(await s.get('k')).toBeUndefined();
  });

  it('throws ResumeStoreError if localStorage is unavailable', async () => {
    vi.stubGlobal('localStorage', undefined);
    const s = localStorageResumeStore();
    await expect(s.get('k')).rejects.toThrow();
  });

  it('throws ResumeStoreError on quota exceeded', async () => {
    vi.stubGlobal('localStorage', {
      getItem: () => null,
      setItem: () => { throw new DOMException('quota exceeded', 'QuotaExceededError'); },
      removeItem: () => {},
    });
    const s = localStorageResumeStore();
    await expect(s.set('k', sample())).rejects.toThrow();
  });
});
