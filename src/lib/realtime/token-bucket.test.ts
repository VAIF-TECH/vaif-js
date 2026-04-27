import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { TokenBucket } from './token-bucket';

describe('TokenBucket', () => {
  beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(new Date(0)); });
  afterEach(() => vi.useRealTimers());

  it('starts full at capacity', () => {
    const b = new TokenBucket({ capacity: 50, refillPerSec: 50 });
    expect(b.available()).toBe(50);
  });

  it('tryConsume returns true and decrements when tokens available', () => {
    const b = new TokenBucket({ capacity: 50, refillPerSec: 50 });
    expect(b.tryConsume()).toBe(true);
    expect(b.available()).toBe(49);
  });

  it('tryConsume returns false when empty', () => {
    const b = new TokenBucket({ capacity: 2, refillPerSec: 1 });
    expect(b.tryConsume()).toBe(true);
    expect(b.tryConsume()).toBe(true);
    expect(b.tryConsume()).toBe(false);
  });

  it('refills over time', () => {
    const b = new TokenBucket({ capacity: 10, refillPerSec: 10 }); // 1 token per 100ms
    for (let i = 0; i < 10; i++) b.tryConsume();
    expect(b.available()).toBe(0);
    vi.advanceTimersByTime(500); // 5 tokens worth
    expect(b.available()).toBe(5);
  });

  it('caps at capacity (no overflow)', () => {
    const b = new TokenBucket({ capacity: 50, refillPerSec: 50 });
    vi.advanceTimersByTime(10_000);
    expect(b.available()).toBe(50);
  });

  it('msUntilAvailable returns 0 when tokens present', () => {
    const b = new TokenBucket({ capacity: 50, refillPerSec: 50 });
    expect(b.msUntilAvailable()).toBe(0);
  });

  it('msUntilAvailable returns time-to-next-token when empty', () => {
    const b = new TokenBucket({ capacity: 1, refillPerSec: 1 }); // 1 token per 1000ms
    b.tryConsume();
    expect(b.msUntilAvailable()).toBe(1000);
  });

  it('throws on invalid capacity', () => {
    expect(() => new TokenBucket({ capacity: 0, refillPerSec: 1 })).toThrow();
    expect(() => new TokenBucket({ capacity: -1, refillPerSec: 1 })).toThrow();
  });

  it('throws on invalid refillPerSec', () => {
    expect(() => new TokenBucket({ capacity: 1, refillPerSec: 0 })).toThrow();
    expect(() => new TokenBucket({ capacity: 1, refillPerSec: -5 })).toThrow();
  });
});
