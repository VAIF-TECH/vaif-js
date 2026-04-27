import { describe, it, expect, vi } from 'vitest';
import { retryWithPolicy, type RetryPolicy, RetryExhaustedError } from './retry';

const policy: RetryPolicy = {
  maxAttempts: 3,
  initialDelayMs: 10,
  maxDelayMs: 100,
  backoffMultiplier: 2,
  retryOn: [500, 'network'],
  retryOnRateLimit: true,
};

describe('retryWithPolicy', () => {
  it('returns immediately on first success', async () => {
    const fn = vi.fn().mockResolvedValue('ok');
    expect(await retryWithPolicy(fn, policy)).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('retries on 500 then succeeds', async () => {
    const err500 = Object.assign(new Error('server'), { status: 500 });
    const fn = vi.fn()
      .mockRejectedValueOnce(err500)
      .mockResolvedValueOnce('ok');
    expect(await retryWithPolicy(fn, policy)).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('throws RetryExhaustedError after maxAttempts retryable failures', async () => {
    const err500 = Object.assign(new Error('server'), { status: 500 });
    const fn = vi.fn().mockRejectedValue(err500);
    await expect(retryWithPolicy(fn, policy)).rejects.toThrow(RetryExhaustedError);
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('does not retry on non-retryable status (e.g. 400)', async () => {
    const err400 = Object.assign(new Error('bad'), { status: 400 });
    const fn = vi.fn().mockRejectedValue(err400);
    await expect(retryWithPolicy(fn, policy)).rejects.toThrow();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('honors retryAfterMs hint on 429 (delay >= hint)', async () => {
    const err429 = Object.assign(new Error('rate'), { status: 429, retryAfterMs: 50 });
    const fn = vi.fn()
      .mockRejectedValueOnce(err429)
      .mockResolvedValueOnce('ok');
    const t0 = Date.now();
    await retryWithPolicy(fn, policy);
    expect(Date.now() - t0).toBeGreaterThanOrEqual(40); // some scheduling slack
  });

  it('retries on network errors when "network" is in retryOn', async () => {
    const errNet = Object.assign(new Error('network refused'), { code: 'ECONNRESET' });
    const fn = vi.fn()
      .mockRejectedValueOnce(errNet)
      .mockResolvedValueOnce('ok');
    expect(await retryWithPolicy(fn, policy)).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('exposes lastError + attempts on RetryExhaustedError', async () => {
    const err500 = Object.assign(new Error('server'), { status: 500 });
    const fn = vi.fn().mockRejectedValue(err500);
    try { await retryWithPolicy(fn, policy); }
    catch (e) {
      expect(e).toBeInstanceOf(RetryExhaustedError);
      expect((e as RetryExhaustedError).attempts).toBe(3);
      expect((e as RetryExhaustedError).lastError).toBe(err500);
    }
  });

  it('caps backoff at maxDelayMs', async () => {
    // With initialDelayMs=10, multiplier=2, maxDelayMs=100, after a few attempts
    // delay shouldn't exceed 100ms regardless of how many attempts.
    const tightPolicy: RetryPolicy = { ...policy, maxAttempts: 5, initialDelayMs: 10, maxDelayMs: 30, backoffMultiplier: 10 };
    const err500 = Object.assign(new Error('s'), { status: 500 });
    const fn = vi.fn().mockRejectedValue(err500);
    const t0 = Date.now();
    await expect(retryWithPolicy(fn, tightPolicy)).rejects.toThrow();
    const elapsed = Date.now() - t0;
    // 4 retries × at most 30ms each = ~120ms upper bound + some slack.
    expect(elapsed).toBeLessThan(500);
  });

  it('throws on maxAttempts < 1', async () => {
    await expect(retryWithPolicy(vi.fn(), { ...policy, maxAttempts: 0 })).rejects.toThrow();
  });
});
