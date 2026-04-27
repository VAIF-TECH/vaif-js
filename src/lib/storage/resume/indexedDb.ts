import type { ResumeRecord, ResumeStore } from '../types';
import { ResumeStoreError } from '../errors';

const DB_NAME = 'vaif_resumes';
const STORE_NAME = 'records';
const DB_VERSION = 1;

function ensureIndexedDB(): IDBFactory {
  const idb = (globalThis as { indexedDB?: IDBFactory }).indexedDB;
  if (!idb) {
    throw new ResumeStoreError('IndexedDB is unavailable in this runtime', 'storage_unavailable');
  }
  return idb;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = ensureIndexedDB().open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(new ResumeStoreError('failed to open IndexedDB', 'open_error', { cause: req.error }));
  });
}

function tx<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then((db) =>
    new Promise<T>((resolve, reject) => {
      const t = db.transaction(STORE_NAME, mode);
      const store = t.objectStore(STORE_NAME);
      const req = run(store);
      req.onsuccess = () => {
        resolve(req.result);
      };
      req.onerror = () => reject(new ResumeStoreError('IndexedDB request failed', 'request_error', { cause: req.error }));
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
      const r = await tx('readonly', (s) => s.get(key));
      return r === undefined ? undefined : (r as ResumeRecord);
    },
    async set(key, record) {
      await tx('readwrite', (s) => s.put(record, key));
    },
    async delete(key) {
      await tx('readwrite', (s) => s.delete(key));
    },
  };
}
