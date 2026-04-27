import pLimit from 'p-limit';

/**
 * Runs `jobs` (an array of async thunks) with at most `concurrency` in flight
 * at any time. Returns results in input order. Rejects with the first error
 * encountered (Promise.all semantics — remaining jobs may still finish but
 * their results are discarded).
 *
 * @throws if `concurrency < 1` or non-finite.
 */
export async function runConcurrent<T>(
  jobs: Array<() => Promise<T>>,
  concurrency: number,
): Promise<T[]> {
  if (!Number.isFinite(concurrency) || concurrency < 1) {
    throw new Error(`concurrency must be a positive integer, got ${concurrency}`);
  }
  if (jobs.length === 0) return [];

  const limit = pLimit(concurrency);
  return Promise.all(jobs.map((job) => limit(job)));
}
