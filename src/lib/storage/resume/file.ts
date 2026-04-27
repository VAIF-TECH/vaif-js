import { promises as fs } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import type { ResumeRecord, ResumeStore } from '../types';
import { ResumeStoreError } from '../errors';

export type FileResumeStoreOptions = {
  /** Directory to store resume files. Defaults to `~/.vaif/uploads`. */
  dir?: string;
};

/**
 * Node filesystem adapter. Writes one JSON file per upload key. Useful for
 * CLI tools that need to survive process restarts. Default location is
 * `~/.vaif/uploads/`.
 */
export function fileResumeStore(opts: FileResumeStoreOptions = {}): ResumeStore {
  const dir = opts.dir ?? join(homedir(), '.vaif', 'uploads');

  function safePath(key: string): string {
    if (!/^[\w.-]+$/.test(key)) {
      throw new ResumeStoreError(
        `Resume key must match [A-Za-z0-9_.-]+, got "${key}"`,
        'invalid_key',
      );
    }
    return join(dir, `${key}.json`);
  }

  async function ensureDir(): Promise<void> {
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (err) {
      throw new ResumeStoreError('failed to create resume dir', 'mkdir_error', { cause: err });
    }
  }

  return {
    async get(key) {
      const path = safePath(key);
      try {
        const text = await fs.readFile(path, 'utf-8');
        return JSON.parse(text) as ResumeRecord;
      } catch (err: unknown) {
        if (err && (err as NodeJS.ErrnoException).code === 'ENOENT') return undefined;
        throw new ResumeStoreError('failed to read resume record', 'read_error', { cause: err });
      }
    },
    async set(key, record) {
      const path = safePath(key);
      await ensureDir();
      try {
        await fs.writeFile(path, JSON.stringify(record), 'utf-8');
      } catch (err) {
        throw new ResumeStoreError('failed to write resume record', 'write_error', { cause: err });
      }
    },
    async delete(key) {
      const path = safePath(key);
      try {
        await fs.unlink(path);
      } catch (err: unknown) {
        if (err && (err as NodeJS.ErrnoException).code === 'ENOENT') return;
        throw new ResumeStoreError('failed to delete resume record', 'delete_error', { cause: err });
      }
    },
  };
}
