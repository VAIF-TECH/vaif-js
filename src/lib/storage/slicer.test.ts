import { describe, it, expect } from 'vitest';
import { sliceInput, type UploadInput } from './slicer';

describe('sliceInput', () => {
  it('slices a Uint8Array into chunkSize-bounded ranges', async () => {
    const data = new Uint8Array(15);
    for (let i = 0; i < 15; i++) data[i] = i;

    const slices: Uint8Array[] = [];
    for await (const chunk of sliceInput(data, 5)) slices.push(chunk);

    expect(slices.length).toBe(3);
    expect(slices[0]!.length).toBe(5);
    expect(slices[2]!.length).toBe(5);
    expect(slices[0]![0]).toBe(0);
    expect(slices[2]![4]).toBe(14);
  });

  it('handles short final chunk', async () => {
    const data = new Uint8Array(13);
    const slices: Uint8Array[] = [];
    for await (const chunk of sliceInput(data, 5)) slices.push(chunk);

    expect(slices.length).toBe(3);
    expect(slices[2]!.length).toBe(3);
  });

  it('handles input shorter than chunkSize', async () => {
    const data = new Uint8Array(3);
    const slices: Uint8Array[] = [];
    for await (const chunk of sliceInput(data, 100)) slices.push(chunk);

    expect(slices.length).toBe(1);
    expect(slices[0]!.length).toBe(3);
  });

  it('reports total size for sized inputs', () => {
    expect(sliceInput.size(new Uint8Array(15))).toBe(15);
  });

  it('returns undefined size for streaming inputs', () => {
    const stream = new ReadableStream();
    expect(sliceInput.size(stream)).toBeUndefined();
  });

  it('slices a Blob via slice() and arrayBuffer()', async () => {
    // 'hello world' is 11 bytes
    const blob = new Blob(['hello world']);
    const slices: Uint8Array[] = [];
    for await (const chunk of sliceInput(blob, 5)) slices.push(chunk);

    expect(slices.length).toBe(3); // 5, 5, 1
    const total = Buffer.concat(slices.map((s) => Buffer.from(s))).toString();
    expect(total).toBe('hello world');
  });

  it('slices a ReadableStream<Uint8Array> with backpressure-friendly buffering', async () => {
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(new Uint8Array([1, 2, 3]));
        controller.enqueue(new Uint8Array([4, 5, 6, 7]));
        controller.enqueue(new Uint8Array([8]));
        controller.close();
      },
    });

    const slices: Uint8Array[] = [];
    for await (const chunk of sliceInput(stream, 4)) slices.push(chunk);

    // Total bytes = 8; chunkSize=4 → 2 chunks of 4
    expect(slices.length).toBe(2);
    expect(slices[0]!.length).toBe(4);
    expect(slices[1]!.length).toBe(4);
    expect(Array.from(slices[0]!)).toEqual([1, 2, 3, 4]);
    expect(Array.from(slices[1]!)).toEqual([5, 6, 7, 8]);
  });

  it('flushes remaining bytes in stream when stream ends mid-chunk', async () => {
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(new Uint8Array([1, 2, 3, 4, 5]));
        controller.close();
      },
    });

    const slices: Uint8Array[] = [];
    for await (const chunk of sliceInput(stream, 4)) slices.push(chunk);

    expect(slices.length).toBe(2);
    expect(slices[1]!.length).toBe(1);
  });

  it('throws on unsupported input type', async () => {
    await expect(async () => {
      // @ts-expect-error invalid input
      for await (const _ of sliceInput({ totally: 'not valid' }, 5)) {
        void _;
      }
    }).rejects.toThrow();
  });

  it('throws on chunkSize < 1', async () => {
    await expect(async () => {
      for await (const _ of sliceInput(new Uint8Array(10), 0)) {
        void _;
      }
    }).rejects.toThrow();
  });
});

// Type re-export to satisfy unused-import if any
export type _Test = UploadInput;
