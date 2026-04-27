export type ProgressEvent = {
  bytesUploaded: number;
  totalBytes: number;            // 0 if streaming input
  percent: number;               // 0..100, 0 if totalBytes is 0
  partsCompleted: number;
  totalParts: number;
  bytesPerSecond: number;        // EMA over 5s window
  estimatedRemainingMs: number;  // 0 if bytesPerSecond is 0 or no remaining
};

export type ProgressEmitterOptions = {
  totalBytes: number;
  totalParts: number;
  onProgress?: (e: ProgressEvent) => void;
  /** Max emits per second. Default 30. */
  maxRateHz?: number;
};

/**
 * Byte-accurate progress emitter with rate throttling and EMA-based
 * bytes-per-second computation over a 5s sliding window.
 *
 * `recordBytes` and `recordPartCompleted` may emit if the throttle window has
 * elapsed since the last emit. `flush()` always emits, regardless of window.
 *
 * `onProgress` callbacks are wrapped in try/catch so a misbehaving handler
 * cannot break the emitter.
 */
export class ProgressEmitter {
  private bytesUploaded = 0;
  private partsCompleted = 0;
  private totalBytes: number;
  private totalParts: number;
  private onProgress: ((e: ProgressEvent) => void) | undefined;
  private minIntervalMs: number;
  private lastEmittedAt = 0;
  private samples: Array<{ ts: number; bytes: number }> = [];

  constructor(opts: ProgressEmitterOptions) {
    this.totalBytes = opts.totalBytes;
    this.totalParts = opts.totalParts;
    this.onProgress = opts.onProgress;
    const hz = opts.maxRateHz ?? 30;
    this.minIntervalMs = Math.max(1, Math.floor(1000 / hz));
  }

  recordBytes(n: number): void {
    this.bytesUploaded += n;
    const now = this.now();
    this.samples.push({ ts: now, bytes: n });
    this.maybeEmit(now);
  }

  recordPartCompleted(): void {
    this.partsCompleted += 1;
    this.maybeEmit(this.now());
  }

  flush(): void {
    this.emit(this.now());
  }

  private maybeEmit(now: number): void {
    if (now - this.lastEmittedAt < this.minIntervalMs) return;
    this.emit(now);
  }

  private emit(now: number): void {
    this.lastEmittedAt = now;
    const event = this.snapshot(now);
    if (!this.onProgress) return;
    try {
      this.onProgress(event);
    } catch (err) {
      console.error('[storage/progress] onProgress threw:', err);
    }
  }

  private snapshot(now: number): ProgressEvent {
    // Keep only last 5s of samples
    this.samples = this.samples.filter((s) => now - s.ts <= 5000);
    const totalRecentBytes = this.samples.reduce((sum, s) => sum + s.bytes, 0);
    const windowMs = this.samples.length > 0 ? Math.max(1, now - this.samples[0]!.ts) : 1;
    const bps = this.samples.length > 0 ? Math.round((totalRecentBytes / windowMs) * 1000) : 0;

    const remaining = this.totalBytes > 0 ? Math.max(0, this.totalBytes - this.bytesUploaded) : 0;
    const eta = bps > 0 && remaining > 0 ? Math.round((remaining / bps) * 1000) : 0;

    return {
      bytesUploaded: this.bytesUploaded,
      totalBytes: this.totalBytes,
      percent: this.totalBytes > 0 ? Math.round((this.bytesUploaded / this.totalBytes) * 100) : 0,
      partsCompleted: this.partsCompleted,
      totalParts: this.totalParts,
      bytesPerSecond: bps,
      estimatedRemainingMs: eta,
    };
  }

  private now(): number {
    return Date.now();
  }
}
