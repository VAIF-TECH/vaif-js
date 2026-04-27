import { describe, it, expect } from 'vitest';
import { memoryResumeStore } from './memory';
import type { ResumeRecord } from '../types';

const sample = (): ResumeRecord => ({
  uploadId: 'u1',
  bucket: 'avatars',
  path: 'me.jpg',
  totalBytes: 1024,
  contentType: 'image/jpeg',
  parts: [{ partNumber: 1, etag: 'e1', size: 512 }],
  createdAt: 1000,
  updatedAt: 1500,
});

describe('memoryResumeStore', () => {
  it('round-trips set/get', async () => {
    const s = memoryResumeStore();
    await s.set('k', sample());
    expect(await s.get('k')).toEqual(sample());
  });
  it('returns undefined for missing key', async () => {
    const s = memoryResumeStore();
    expect(await s.get('nope')).toBeUndefined();
  });
  it('delete removes the key', async () => {
    const s = memoryResumeStore();
    await s.set('k', sample());
    await s.delete('k');
    expect(await s.get('k')).toBeUndefined();
  });
  it('deep-clones on set/get so mutating leaks do not occur', async () => {
    const s = memoryResumeStore();
    const r = sample();
    await s.set('k', r);
    r.parts[0]!.etag = 'MUTATED';
    const fetched = await s.get('k');
    expect(fetched!.parts[0]!.etag).toBe('e1');
  });
  it('isolated stores do not share state', async () => {
    const a = memoryResumeStore();
    const b = memoryResumeStore();
    await a.set('k', sample());
    expect(await b.get('k')).toBeUndefined();
  });
});
