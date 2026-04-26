import { describe, it, expect } from 'vitest';
import { NoopCipher, type MessageCipher } from './cipher';

describe('NoopCipher', () => {
  it('encrypt returns plaintext unchanged', async () => {
    const plain = new Uint8Array([1, 2, 3]);
    const out = await NoopCipher.encrypt('room:1', plain);
    expect(Array.from(out)).toEqual([1, 2, 3]);
  });

  it('decrypt returns ciphertext unchanged', async () => {
    const cipher = new Uint8Array([4, 5, 6]);
    const out = await NoopCipher.decrypt('room:1', cipher);
    expect(Array.from(out)).toEqual([4, 5, 6]);
  });

  it('returns the same reference (no-op = no copy)', async () => {
    const plain = new Uint8Array([1, 2, 3]);
    expect(await NoopCipher.encrypt('c', plain)).toBe(plain);
    expect(await NoopCipher.decrypt('c', plain)).toBe(plain);
  });

  it('matches MessageCipher interface', () => {
    const c: MessageCipher = NoopCipher;
    expect(typeof c.encrypt).toBe('function');
    expect(typeof c.decrypt).toBe('function');
  });

  it('handles empty Uint8Array', async () => {
    const empty = new Uint8Array(0);
    expect((await NoopCipher.encrypt('c', empty)).length).toBe(0);
    expect((await NoopCipher.decrypt('c', empty)).length).toBe(0);
  });

  it('handles large Uint8Array (1MB)', async () => {
    const big = new Uint8Array(1024 * 1024);
    big[0] = 1;
    big[big.length - 1] = 2;
    const out = await NoopCipher.encrypt('c', big);
    expect(out.length).toBe(big.length);
    expect(out[0]).toBe(1);
    expect(out[out.length - 1]).toBe(2);
  });
});
