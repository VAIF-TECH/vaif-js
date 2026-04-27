export type HeartbeatOptions = {
  intervalMs: number;
  timeoutMs: number;
  onPing: () => void;
  onTimeout: () => void;
};

/**
 * Sends a "ping" at fixed intervals. After each ping, expects `recordPong()`
 * within `timeoutMs`; if not, fires `onTimeout`.
 *
 * Restarting after `setIntervalMs` only happens if `start()` was already called —
 * the heartbeat is opt-in, not auto-running.
 */
export class Heartbeat {
  private intervalMs: number;
  private timeoutMs: number;
  private onPing: () => void;
  private onTimeout: () => void;
  private pingTimer: ReturnType<typeof setInterval> | null = null;
  private timeoutTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(opts: HeartbeatOptions) {
    if (!Number.isFinite(opts.intervalMs) || opts.intervalMs <= 0) {
      throw new Error(`intervalMs must be a positive finite number, got ${opts.intervalMs}`);
    }
    if (!Number.isFinite(opts.timeoutMs) || opts.timeoutMs <= 0) {
      throw new Error(`timeoutMs must be a positive finite number, got ${opts.timeoutMs}`);
    }
    this.intervalMs = opts.intervalMs;
    this.timeoutMs = opts.timeoutMs;
    this.onPing = opts.onPing;
    this.onTimeout = opts.onTimeout;
  }

  start(): void {
    if (this.pingTimer !== null) return; // idempotent
    this.pingTimer = setInterval(() => this.firePing(), this.intervalMs);
  }

  stop(): void {
    if (this.pingTimer !== null) { clearInterval(this.pingTimer); this.pingTimer = null; }
    if (this.timeoutTimer !== null) { clearTimeout(this.timeoutTimer); this.timeoutTimer = null; }
  }

  recordPong(): void {
    if (this.timeoutTimer !== null) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
  }

  /**
   * Updates the ping interval. If currently running, restarts the timer with
   * the new interval. If stopped, only updates the value for the next start().
   */
  setIntervalMs(intervalMs: number): void {
    if (!Number.isFinite(intervalMs) || intervalMs <= 0) {
      throw new Error(`intervalMs must be a positive finite number, got ${intervalMs}`);
    }
    this.intervalMs = intervalMs;
    if (this.pingTimer !== null) {
      clearInterval(this.pingTimer);
      this.pingTimer = setInterval(() => this.firePing(), this.intervalMs);
    }
  }

  private firePing(): void {
    // Guard: stop() may have run after this tick was queued.
    if (this.pingTimer === null) return;

    // Clear any orphaned timeout from a previous ping (e.g., interval < timeoutMs).
    if (this.timeoutTimer !== null) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }

    try {
      this.onPing();
    } catch (err) {
      console.error('[realtime/heartbeat] onPing threw:', err);
    }

    this.timeoutTimer = setTimeout(() => {
      this.timeoutTimer = null;
      try {
        this.onTimeout();
      } catch (err) {
        console.error('[realtime/heartbeat] onTimeout threw:', err);
      }
    }, this.timeoutMs);
  }
}
