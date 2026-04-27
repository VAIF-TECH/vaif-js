export type BackoffConfig = {
  initialDelayMs: number;
  maxDelayMs: number;
  /** 0..1, e.g. 0.3 means ±30% randomization */
  jitter: number;
  backoffMultiplier: number;
};

/**
 * Pure function: deterministic given (attempt, cfg, rng).
 * Computes a retry delay following exponential backoff, capped at maxDelayMs,
 * with multiplicative jitter applied AFTER the cap.
 *
 * @param attempt zero-indexed retry attempt count, must be a finite non-negative integer
 * @param cfg backoff configuration; all numeric fields must be finite, jitter must be in [0, 1]
 * @param rng random source returning a value in [0, 1]; injectable for tests
 * @throws Error on invalid inputs (non-finite, negative attempt, jitter out of range)
 */
export function computeBackoffDelay(
  attempt: number,
  cfg: BackoffConfig,
  rng: () => number = Math.random,
): number {
  if (!Number.isFinite(attempt) || attempt < 0 || !Number.isInteger(attempt)) {
    throw new Error(`attempt must be a non-negative integer, got ${attempt}`);
  }
  if (!Number.isFinite(cfg.initialDelayMs) || cfg.initialDelayMs < 0) {
    throw new Error(`initialDelayMs must be a finite non-negative number, got ${cfg.initialDelayMs}`);
  }
  if (!Number.isFinite(cfg.maxDelayMs) || cfg.maxDelayMs < 0) {
    throw new Error(`maxDelayMs must be a finite non-negative number, got ${cfg.maxDelayMs}`);
  }
  if (!Number.isFinite(cfg.backoffMultiplier) || cfg.backoffMultiplier <= 0) {
    throw new Error(`backoffMultiplier must be a finite positive number, got ${cfg.backoffMultiplier}`);
  }
  if (!Number.isFinite(cfg.jitter) || cfg.jitter < 0 || cfg.jitter > 1) {
    throw new Error(`jitter must be in [0, 1], got ${cfg.jitter}`);
  }

  const exponential = cfg.initialDelayMs * Math.pow(cfg.backoffMultiplier, attempt);
  const capped = Math.min(cfg.maxDelayMs, exponential);
  const r = rng();
  // Clamp rng to [0, 1] in case the injected source misbehaves; we don't trust callers.
  const clampedR = Math.max(0, Math.min(1, r));
  const jitterFactor = 1 - cfg.jitter + clampedR * cfg.jitter * 2; // [1-jitter, 1+jitter]
  return Math.round(capped * jitterFactor);
}
