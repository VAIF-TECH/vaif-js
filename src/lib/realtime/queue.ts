export type DropPolicy = 'oldest' | 'newest' | 'reject';
export type DropReason = 'queue_full' | 'rate_limit';

export type OutgoingQueueConfig<T> = {
  maxSize: number;
  dropPolicy: DropPolicy;
  onDrop?: (msg: T, reason: DropReason) => void;
};

export class BackpressureError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BackpressureError';
  }
}

export class OutgoingQueue<T> {
  private buffer: T[] = [];
  private cfg: OutgoingQueueConfig<T>;
  private draining = false;

  constructor(cfg: OutgoingQueueConfig<T>) {
    if (!Number.isFinite(cfg.maxSize) || cfg.maxSize < 1) {
      throw new Error(`maxSize must be a finite integer >= 1, got ${cfg.maxSize}`);
    }
    this.cfg = cfg;
  }

  get size(): number {
    return this.buffer.length;
  }

  enqueue(msg: T): boolean {
    if (this.buffer.length >= this.cfg.maxSize) {
      switch (this.cfg.dropPolicy) {
        case 'oldest': {
          const dropped = this.buffer.shift() as T;
          this.cfg.onDrop?.(dropped, 'queue_full');
          this.buffer.push(msg);
          return true;
        }
        case 'newest': {
          this.cfg.onDrop?.(msg, 'queue_full');
          return false;
        }
        case 'reject':
          throw new BackpressureError(`Outgoing queue full at ${this.cfg.maxSize}`);
      }
    }
    this.buffer.push(msg);
    return true;
  }

  /**
   * Drains the queue FIFO. Awaits each `send` sequentially to preserve ordering.
   * On `send` error, leaves the failing message and any subsequent messages at the
   * front and re-throws — caller can retry `drain` later.
   *
   * Concurrency: re-entrant `drain` calls throw immediately. `clear()` during a
   * drain throws (would race with the post-send shift). Use `clear()` only
   * between drains.
   */
  async drain(send: (msg: T) => Promise<void>): Promise<void> {
    if (this.draining) {
      throw new Error('drain() is already in progress on this queue');
    }
    this.draining = true;
    try {
      while (this.buffer.length > 0) {
        const msg = this.buffer[0];
        await send(msg);
        // Defensive: only remove the head if it's still the message we sent.
        // If something mutated the buffer mid-await (shouldn't happen because
        // `clear()` and re-entrant `drain()` both throw, but enqueue can prepend
        // via the 'oldest' drop policy — which only happens at full buffer, and
        // we just took an element out so it can't be full), this guards integrity.
        if (this.buffer[0] === msg) {
          this.buffer.shift();
        }
      }
    } finally {
      this.draining = false;
    }
  }

  /**
   * Empties the queue. Throws if a drain is in progress to avoid corrupting
   * the post-send shift in `drain()`.
   */
  clear(): void {
    if (this.draining) {
      throw new Error('cannot clear() while drain() is in progress');
    }
    this.buffer.length = 0;
  }
}
