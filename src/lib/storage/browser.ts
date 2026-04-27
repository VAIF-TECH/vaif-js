import { upload as defaultUpload } from './upload';
import type { UploadHandle, UploadOptions } from './types';

// Minimal DOM types — declared inline so this file does not require `lib: dom`
// in tsconfig (which would pollute Node-only files like internal/headers.ts).
// At runtime these are the standard browser globals; consumers using Node will
// not import this module (it's exposed at `@vaif/client/storage/browser`).

type DomFile = Blob & { readonly name: string; readonly type: string };
type DomFileList = { readonly length: number; item(i: number): DomFile | null } & ArrayLike<DomFile>;
type DomDataTransfer = { readonly files: DomFileList };
type DomDragEvent = Event & { readonly dataTransfer: DomDataTransfer | null };
type DomHTMLInputElement = EventTarget & { readonly files: DomFileList | null };
type DomHTMLElement = EventTarget;

type StorageClient = { baseUrl: string; apiKey?: string };

export type UploadFromInputOptions = {
  bucket: string;
  /** Path resolver. String concatenates with file.name; function gets full File. */
  pathPrefix?: string | ((file: DomFile) => string);
  contentType?: string;
  onUpload?: (handle: UploadHandle, file: DomFile) => void;
  /** @internal — for testing. */
  _uploadFn?: typeof defaultUpload;
};

/**
 * Wires a `<input type="file">` change event to upload each selected file.
 * Returns a live array of handles — push-only (new entries appended on each change).
 */
export function uploadFromInput(
  input: DomHTMLInputElement,
  client: StorageClient,
  opts: UploadFromInputOptions,
): UploadHandle[] {
  const handles: UploadHandle[] = [];
  const fn = opts._uploadFn ?? defaultUpload;

  const handler = (): void => {
    const list = input.files;
    const files: DomFile[] = list ? Array.from(list) : [];
    for (const file of files) {
      const path =
        typeof opts.pathPrefix === 'function'
          ? opts.pathPrefix(file)
          : (opts.pathPrefix ?? '') + file.name;
      const handle = fn(client as any, {
        bucket: opts.bucket,
        path,
        file: file as unknown as Blob,
        contentType: opts.contentType ?? file.type,
      } as UploadOptions);
      handles.push(handle);
      opts.onUpload?.(handle, file);
    }
  };

  input.addEventListener('change', handler);
  return handles;
}

export type DropZoneOptions = {
  bucket: string;
  pathPrefix?: string;
  /** Filter — MIME types (`image/*`, `application/pdf`) or extensions (`.pdf`). */
  accept?: string[];
  contentType?: string;
  onUpload?: (handle: UploadHandle, file: DomFile) => void;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
  /** @internal — for testing. */
  _uploadFn?: typeof defaultUpload;
};

/**
 * Wires drop-zone events on the given element. Returns a cleanup fn that
 * detaches all listeners. Drops outside the accept filter are silently ignored.
 */
export function createDropZone(
  el: DomHTMLElement,
  client: StorageClient,
  opts: DropZoneOptions,
): () => void {
  const fn = opts._uploadFn ?? defaultUpload;

  const onDragEnter = (e: Event): void => {
    e.preventDefault();
    opts.onDragEnter?.();
  };
  const onDragLeave = (e: Event): void => {
    e.preventDefault();
    opts.onDragLeave?.();
  };
  const onDragOver = (e: Event): void => {
    e.preventDefault();
  };
  const onDrop = (e: Event): void => {
    e.preventDefault();
    const dt = (e as DomDragEvent).dataTransfer;
    const files: DomFile[] = dt ? Array.from(dt.files) : [];
    for (const file of files) {
      if (opts.accept && !opts.accept.some((p) => match(p, file))) continue;
      const path = (opts.pathPrefix ?? '') + file.name;
      const handle = fn(client as any, {
        bucket: opts.bucket,
        path,
        file: file as unknown as Blob,
        contentType: opts.contentType ?? file.type,
      } as UploadOptions);
      opts.onUpload?.(handle, file);
    }
  };

  el.addEventListener('dragenter', onDragEnter);
  el.addEventListener('dragleave', onDragLeave);
  el.addEventListener('dragover', onDragOver);
  el.addEventListener('drop', onDrop);

  return () => {
    el.removeEventListener('dragenter', onDragEnter);
    el.removeEventListener('dragleave', onDragLeave);
    el.removeEventListener('dragover', onDragOver);
    el.removeEventListener('drop', onDrop);
  };
}

function match(pattern: string, file: DomFile): boolean {
  // Extension: ".pdf" / ".jpg"
  if (pattern.startsWith('.')) {
    return file.name.toLowerCase().endsWith(pattern.toLowerCase());
  }
  // MIME wildcard: "image/*"
  if (pattern.endsWith('/*')) {
    return file.type.startsWith(pattern.slice(0, -1));
  }
  // Exact MIME
  return file.type === pattern;
}
