import type { ResumeRecord, ResumeStore } from '../types';
import { ResumeStoreError } from '../errors';

const DB_NAME = 'vaif_resumes';
const STORE_NAME = 'records';
const DB_VERSION = 1;

// Minimal structural types so this module compiles in environments where the
// `dom` lib is not part of `tsconfig.lib`. The runtime objects are still the
// real browser globals.
type IDBRequestLike<T> = {
  result: T;
  error: unknown;
  onsuccess: ((this: unknown, ev: unknown) => unknown) | null;
  onerror: ((this: unknown, ev: unknown) => unknown) | null;
};
type IDBOpenRequestLike = IDBRequestLike<IDBDatabaseLike> & {
  onupgradeneeded: ((this: unknown, ev: unknown) => unknown) | null;
};
type IDBObjectStoreLike = {
  get(key: string): IDBRequestLike<unknown>;
  put(value: unknown, key: string): IDBRequestLike<unknown>;
  delete(key: string): IDBRequestLike<unknown>;
};
type IDBTransactionLike = {
  objectStore(name: string): IDBObjectStoreLike;
  oncomplete: ((this: unknown, ev: unknown) => unknown) | null;
  onerror: ((this: unknown, ev: unknown) => unknown) | null;
  onabort: ((this: unknown, ev: unknown) => unknown) | null;
};
type IDBDatabaseLike = {
  objectStoreNames: { contains(name: string): boolean };
  createObjectStore(name: string): unknown;
  transaction(name: string, mode: 'readonly' | 'readwrite'): IDBTransactionLike;
  close(): void;
};
type IDBFactoryLike = {
  open(name: string, version: number): IDBOpenRequestLike;
};

function ensureIndexedDB(): IDBFactoryLike {
  const idb = (globalThis as { indexedDB?: IDBFactoryLike }).indexedDB;
  if (!idb) {
    throw new ResumeStoreError('IndexedDB is unavailable in this runtime', 'storage_unavailable');
  }
  return idb;
}

function openDb(): Promise<IDBDatabaseLike> {
  return new Promise((resolve, reject) => {
    const req = ensureIndexedDB().open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () =>
      reject(new ResumeStoreError('failed to open IndexedDB', 'open_error', { cause: req.error }));
  });
}

function tx<T>(
  mode: 'readonly' | 'readwrite',
  run: (store: IDBObjectStoreLike) => IDBRequestLike<T>,
): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE_NAME, mode);
        const store = t.objectStore(STORE_NAME);
        const req = run(store);
        req.onsuccess = () => {
          resolve(req.result);
        };
        req.onerror = () =>
          reject(
            new ResumeStoreError('IndexedDB request failed', 'request_error', { cause: req.error }),
          );
        t.oncomplete = () => db.close();
        t.onerror = () => db.close();
        t.onabort = () => db.close();
      }),
  );
}

/**
 * Browser IndexedDB adapter. Larger storage budget than localStorage —
 * suitable for resumable uploads of files >5 MB. Uses a single object store
 * `records` keyed by user-supplied key.
 */
export function indexedDbResumeStore(): ResumeStore {
  return {
    async get(key) {
      const r = await tx<unknown>('readonly', (s) => s.get(key) as IDBRequestLike<unknown>);
      return r === undefined ? undefined : (r as ResumeRecord);
    },
    async set(key, record) {
      await tx<unknown>('readwrite', (s) => s.put(record, key) as IDBRequestLike<unknown>);
    },
    async delete(key) {
      await tx<unknown>('readwrite', (s) => s.delete(key) as IDBRequestLike<unknown>);
    },
  };
}
