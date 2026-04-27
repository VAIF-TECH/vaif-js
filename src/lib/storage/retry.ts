export type RetryPolicy = {
  maxAttempts: number;
  initialDelayMs: number;
  maxDelayMs: number;
  backoffMultiplier: number;
  /** HTTP status codes (or 'network') that should be retried. */
  retryOn: Array<number | 'network'>;
  /** Retry on HTTP 429 specifically, honoring Retry-After (passed via err.retryAfterMs). */
  retryOnRateLimit: boolean;
};

export class RetryExhaustedError extends Error {
  constructor(public readonly lastError: unknown, public readonly attempts: number) {
    super(`Retry exhausted after ${attempts} attempts`);
    this.name = 'RetryExhaustedError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function isNetworkError(err: any): boolean {
  if (!err) return false;
  const code = err.code as string | undefined;
  if (code === 'ENOTFOUND' || code === 'ECONNRESET' || code === 'ECONNREFUSED' || code === 'ETIMEDOUT') return true;
  if (typeof err.message === 'string' && /network|fetch failed|ECONNRESET/i.test(err.message)) return true;
  return false;
}

function isRetryable(err: any, policy: RetryPolicy): boolean {
  if (err && err.status === 429 && policy.retryOnRateLimit) return true;
  if (err && typeof err.status === 'number' && policy.retryOn.includes(err.status)) return true;
  if (policy.retryOn.includes('network') && isNetworkError(err)) return true;
  return false;
}

export async function retryWithPolicy<T>(fn: () => Promise<T>, policy: RetryPolicy): Promise<T> {
  if (!Number.isFinite(policy.maxAttempts) || policy.maxAttempts < 1) {
    throw new Error(`maxAttempts must be >= 1, got ${policy.maxAttempts}`);
  }

  let lastError: unknown;
  for (let attempt = 0; attempt < policy.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      lastError = err;
      const retryable = isRetryable(err, policy);
      const isLastAttempt = attempt === policy.maxAttempts - 1;

      if (!retryable) {
        throw err;
      }
      if (isLastAttempt) {
        throw new RetryExhaustedError(lastError, policy.maxAttempts);
      }

      const baseDelay = Math.min(
        policy.maxDelayMs,
        policy.initialDelayMs * Math.pow(policy.backoffMultiplier, attempt),
      );
      const honoredDelay = typeof err.retryAfterMs === 'number' ? err.retryAfterMs : baseDelay;
      await new Promise((r) => setTimeout(r, honoredDelay));
    }
  }
  // Unreachable, but TypeScript wants a return.
  throw new RetryExhaustedError(lastError, policy.maxAttempts);
}
