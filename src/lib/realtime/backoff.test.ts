import { describe, it, expect } from 'vitest';
import { computeBackoffDelay, type BackoffConfig } from './backoff';

const cfg: BackoffConfig = {
  initialDelayMs: 1000,
  maxDelayMs: 30_000,
  jitter: 0.3,
  backoffMultiplier: 2,
};

describe('computeBackoffDelay', () => {
  it('returns initial delay on attempt 0 (no jitter at 0.5)', () => {
    expect(computeBackoffDelay(0, cfg, () => 0.5)).toBe(1000);
  });

  it('doubles on each attempt up to max', () => {
    expect(computeBackoffDelay(0, cfg, () => 0.5)).toBe(1000);
    expect(computeBackoffDelay(1, cfg, () => 0.5)).toBe(2000);
    expect(computeBackoffDelay(2, cfg, () => 0.5)).toBe(4000);
    expect(computeBackoffDelay(3, cfg, () => 0.5)).toBe(8000);
    expect(computeBackoffDelay(4, cfg, () => 0.5)).toBe(16000);
    expect(computeBackoffDelay(5, cfg, () => 0.5)).toBe(30000);
    expect(computeBackoffDelay(10, cfg, () => 0.5)).toBe(30000);
  });

  it('applies negative jitter when rng returns 0', () => {
    expect(computeBackoffDelay(0, cfg, () => 0)).toBe(700); // 1000 * (1 - 0.3)
  });

  it('applies positive jitter when rng returns 1', () => {
    expect(computeBackoffDelay(0, cfg, () => 1)).toBe(1300); // 1000 * (1 + 0.3)
  });

  it('handles zero jitter (deterministic)', () => {
    expect(computeBackoffDelay(2, { ...cfg, jitter: 0 }, () => 0)).toBe(4000);
    expect(computeBackoffDelay(2, { ...cfg, jitter: 0 }, () => 1)).toBe(4000);
  });

  it('throws on negative attempt', () => {
    expect(() => computeBackoffDelay(-1, cfg, () => 0.5)).toThrow();
  });

  it('caps at maxDelayMs even with positive jitter pushing higher', () => {
    // attempt 100 with multiplier 2 = 1000 * 2^100 ≫ maxDelayMs
    // capped to 30000, then jitter applied: 30000 * 1.3 = 39000
    expect(computeBackoffDelay(100, cfg, () => 1)).toBe(39000);
  });

  it('uses Math.random by default if rng omitted', () => {
    const result = computeBackoffDelay(0, cfg);
    expect(result).toBeGreaterThanOrEqual(700);
    expect(result).toBeLessThanOrEqual(1300);
  });

  it('throws on NaN attempt', () => {
    expect(() => computeBackoffDelay(NaN, cfg, () => 0.5)).toThrow();
  });

  it('throws on Infinity attempt', () => {
    expect(() => computeBackoffDelay(Infinity, cfg, () => 0.5)).toThrow();
  });

  it('throws on fractional attempt', () => {
    expect(() => computeBackoffDelay(1.5, cfg, () => 0.5)).toThrow();
  });

  it('throws on jitter > 1', () => {
    expect(() => computeBackoffDelay(0, { ...cfg, jitter: 1.5 }, () => 0.5)).toThrow();
  });

  it('throws on jitter < 0', () => {
    expect(() => computeBackoffDelay(0, { ...cfg, jitter: -0.1 }, () => 0.5)).toThrow();
  });

  it('throws on non-finite config values', () => {
    expect(() => computeBackoffDelay(0, { ...cfg, initialDelayMs: NaN }, () => 0.5)).toThrow();
    expect(() => computeBackoffDelay(0, { ...cfg, maxDelayMs: Infinity }, () => 0.5)).toThrow();
    expect(() => computeBackoffDelay(0, { ...cfg, backoffMultiplier: 0 }, () => 0.5)).toThrow();
  });

  it('handles backoffMultiplier of 1 (no growth)', () => {
    expect(computeBackoffDelay(0, { ...cfg, backoffMultiplier: 1 }, () => 0.5)).toBe(1000);
    expect(computeBackoffDelay(5, { ...cfg, backoffMultiplier: 1 }, () => 0.5)).toBe(1000);
  });

  it('clamps rng outputs > 1 to 1', () => {
    // rng misbehaves and returns 1.5; result should equal what rng=1 produces
    const a = computeBackoffDelay(0, cfg, () => 1.5);
    const b = computeBackoffDelay(0, cfg, () => 1);
    expect(a).toBe(b);
  });

  it('clamps rng outputs < 0 to 0', () => {
    const a = computeBackoffDelay(0, cfg, () => -0.5);
    const b = computeBackoffDelay(0, cfg, () => 0);
    expect(a).toBe(b);
  });
});
