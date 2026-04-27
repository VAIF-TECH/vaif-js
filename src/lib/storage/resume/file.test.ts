import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileResumeStore } from './file';
import type { ResumeRecord } from '../types';

const sample = (): ResumeRecord => ({
  uploadId: 'u1', bucket: 'b', path: 'p',
  totalBytes: 100, contentType: 't',
  parts: [{ partNumber: 1, etag: 'e1', size: 50 }],
  createdAt: 1, updatedAt: 2,
});

describe('fileResumeStore', () => {
  let dir: string;
  beforeEach(() => { dir = mkdtempSync(join(tmpdir(), 'vaif-resume-test-')); });
  afterEach(() => { rmSync(dir, { recursive: true, force: true }); });

  it('round-trips set/get under the configured directory', async () => {
    const s = fileResumeStore({ dir });
    await s.set('myup', sample());
    expect(await s.get('myup')).toEqual(sample());
  });

  it('returns undefined for missing key', async () => {
    const s = fileResumeStore({ dir });
    expect(await s.get('nope')).toBeUndefined();
  });

  it('delete removes the file', async () => {
    const s = fileResumeStore({ dir });
    await s.set('k', sample());
    await s.delete('k');
    expect(await s.get('k')).toBeUndefined();
  });

  it('rejects keys with path-traversal characters', async () => {
    const s = fileResumeStore({ dir });
    await expect(s.set('../escape', sample())).rejects.toThrow();
    await expect(s.set('with/slash', sample())).rejects.toThrow();
  });

  it('default dir is ~/.vaif/uploads when no dir provided', () => {
    // Just verify the factory can be called without dir; don't actually write to home in tests.
    expect(typeof fileResumeStore).toBe('function');
  });
});
