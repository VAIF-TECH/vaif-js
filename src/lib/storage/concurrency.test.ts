import { describe, it, expect } from 'vitest';
import { runConcurrent } from './concurrency';

describe('runConcurrent', () => {
  it('runs all jobs and returns results in input order', async () => {
    const jobs = [1, 2, 3, 4, 5].map((n) => async () => n * 2);
    const results = await runConcurrent(jobs, 2);
    expect(results).toEqual([2, 4, 6, 8, 10]);
  });

  it('respects concurrency limit (max in-flight at any time)', async () => {
    let inFlight = 0;
    let maxObserved = 0;
    const jobs = Array.from({ length: 8 }, () => async () => {
      inFlight++;
      maxObserved = Math.max(maxObserved, inFlight);
      await new Promise((r) => setTimeout(r, 10));
      inFlight--;
      return inFlight;
    });
    await runConcurrent(jobs, 3);
    expect(maxObserved).toBeLessThanOrEqual(3);
    expect(maxObserved).toBeGreaterThanOrEqual(2);
  });

  it('runs all 5 jobs even with concurrency 1', async () => {
    const order: number[] = [];
    const jobs = [1, 2, 3, 4, 5].map((n) => async () => { order.push(n); return n; });
    const results = await runConcurrent(jobs, 1);
    expect(results).toEqual([1, 2, 3, 4, 5]);
    expect(order).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns empty array for no jobs', async () => {
    const results = await runConcurrent<number>([], 3);
    expect(results).toEqual([]);
  });

  it('rejects with the first error and cancels remaining (Promise.all semantics)', async () => {
    const jobs = [
      async () => 1,
      async () => { throw new Error('boom'); },
      async () => { await new Promise((r) => setTimeout(r, 50)); return 3; },
    ];
    await expect(runConcurrent(jobs, 2)).rejects.toThrow('boom');
  });

  it('throws on concurrency < 1', async () => {
    await expect(runConcurrent([async () => 1], 0)).rejects.toThrow();
    await expect(runConcurrent([async () => 1], -1)).rejects.toThrow();
  });

  it('handles concurrency higher than job count', async () => {
    const jobs = [async () => 'a', async () => 'b'];
    const results = await runConcurrent(jobs, 100);
    expect(results).toEqual(['a', 'b']);
  });
});
