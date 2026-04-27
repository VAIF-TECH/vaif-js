export type TokenBucketConfig = {
  capacity: number;
  refillPerSec: number;
};

/**
 * Token bucket rate limiter. `tryConsume` returns true if a token was taken
 * (caller may proceed) or false if empty (caller must defer/queue).
 *
 * Tokens accumulate continuously at `refillPerSec`, capped at `capacity`.
 * Time source is `performance.now()` if available (high-resolution monotonic),
 * else `Date.now()`.
 */
export class TokenBucket {
  private capacity: number;
  private refillPerSec: number;
  private tokens: number;
  private lastRefillAt: number;

  constructor(cfg: TokenBucketConfig) {
    if (!Number.isFinite(cfg.capacity) || cfg.capacity <= 0) {
      throw new Error(`capacity must be a positive finite number, got ${cfg.capacity}`);
    }
    if (!Number.isFinite(cfg.refillPerSec) || cfg.refillPerSec <= 0) {
      throw new Error(`refillPerSec must be a positive finite number, got ${cfg.refillPerSec}`);
    }
    this.capacity = cfg.capacity;
    this.refillPerSec = cfg.refillPerSec;
    this.tokens = cfg.capacity; // start full
    this.lastRefillAt = this.now();
  }

  available(): number {
    this.refill();
    return Math.floor(this.tokens);
  }

  tryConsume(count = 1): boolean {
    this.refill();
    if (this.tokens >= count) {
      this.tokens -= count;
      return true;
    }
    return false;
  }

  msUntilAvailable(count = 1): number {
    this.refill();
    if (this.tokens >= count) return 0;
    const needed = count - this.tokens;
    return Math.ceil((needed / this.refillPerSec) * 1000);
  }

  private refill(): void {
    const now = this.now();
    const elapsed = (now - this.lastRefillAt) / 1000;
    if (elapsed <= 0) return;
    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillPerSec);
    this.lastRefillAt = now;
  }

  private now(): number {
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      return performance.now();
    }
    return Date.now();
  }
}
