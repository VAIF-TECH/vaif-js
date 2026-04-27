/**
 * Supported upload input types. Browser File extends Blob, so File is covered
 * via the Blob branch. Buffer is a Node-only Uint8Array subclass.
 */
export type UploadInput =
  | Uint8Array
  | Blob
  | ReadableStream<Uint8Array>;

/**
 * Yields `Uint8Array` chunks of size up to `chunkSize` from the given input.
 * Streaming inputs are buffered up to `chunkSize` per yield (no full
 * materialization).
 *
 * @throws if `chunkSize < 1` or the input is an unsupported type.
 */
export async function* sliceInput(
  input: UploadInput,
  chunkSize: number,
): AsyncIterable<Uint8Array> {
  if (!Number.isFinite(chunkSize) || chunkSize < 1) {
    throw new Error(`chunkSize must be a positive integer, got ${chunkSize}`);
  }

  // Uint8Array (covers Buffer in Node)
  if (input instanceof Uint8Array) {
    for (let i = 0; i < input.length; i += chunkSize) {
      yield input.subarray(i, Math.min(i + chunkSize, input.length));
    }
    return;
  }

  // Blob / File
  if (typeof Blob !== 'undefined' && input instanceof Blob) {
    let offset = 0;
    while (offset < input.size) {
      const end = Math.min(offset + chunkSize, input.size);
      const chunk = new Uint8Array(await input.slice(offset, end).arrayBuffer());
      yield chunk;
      offset = end;
    }
    return;
  }

  // ReadableStream<Uint8Array>
  if (typeof ReadableStream !== 'undefined' && input instanceof ReadableStream) {
    const reader = (input as ReadableStream<Uint8Array>).getReader();
    let buffer = new Uint8Array(0);
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          if (buffer.length > 0) yield buffer;
          return;
        }
        // Append value to buffer
        const merged = new Uint8Array(buffer.length + value.length);
        merged.set(buffer);
        merged.set(value, buffer.length);
        buffer = merged;
        // Emit full chunks
        while (buffer.length >= chunkSize) {
          yield buffer.subarray(0, chunkSize);
          buffer = buffer.subarray(chunkSize);
        }
      }
    } finally {
      reader.releaseLock();
    }
  } else {
    // Unknown
    throw new Error(
      `sliceInput: unsupported input type (got ${Object.prototype.toString.call(input)})`,
    );
  }
}

/**
 * Returns the byte size of the input if known. `undefined` for streaming inputs.
 */
sliceInput.size = (input: UploadInput): number | undefined => {
  if (input instanceof Uint8Array) return input.length;
  if (typeof Blob !== 'undefined' && input instanceof Blob) return input.size;
  return undefined;
};
