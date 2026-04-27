import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ProgressEmitter } from './progress';

describe('ProgressEmitter', () => {
  beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(new Date(0)); });
  afterEach(() => vi.useRealTimers());

  it('flush emits a snapshot with cumulative bytes and percent', () => {
    const fn = vi.fn();
    const e = new ProgressEmitter({ totalBytes: 1000, totalParts: 4, onProgress: fn });
    e.recordBytes(250);
    e.flush();
    expect(fn).toHaveBeenLastCalledWith(expect.objectContaining({
      bytesUploaded: 250,
      totalBytes: 1000,
      percent: 25,
    }));
  });

  it('reports parts completed independently of bytes', () => {
    const fn = vi.fn();
    const e = new ProgressEmitter({ totalBytes: 1000, totalParts: 4, onProgress: fn });
    e.recordPartCompleted();
    e.recordPartCompleted();
    e.flush();
    expect(fn).toHaveBeenLastCalledWith(expect.objectContaining({ partsCompleted: 2, totalParts: 4 }));
  });

  it('throttles intermediate emits to maxRateHz (default 30)', () => {
    const fn = vi.fn();
    const e = new ProgressEmitter({ totalBytes: 100_000, totalParts: 1, onProgress: fn });
    for (let i = 0; i < 1000; i++) {
      e.recordBytes(10);
      vi.advanceTimersByTime(1); // 1ms each → 1000ms total
    }
    // At 30 Hz over 1000ms, expect at most ~30-31 emits.
    expect(fn.mock.calls.length).toBeLessThanOrEqual(31);
  });

  it('flush always emits regardless of throttle window', () => {
    const fn = vi.fn();
    const e = new ProgressEmitter({ totalBytes: 100, totalParts: 1, onProgress: fn });
    e.recordBytes(10);
    fn.mockClear();
    e.flush();
    expect(fn).toHaveBeenCalledOnce();
  });

  it('computes bytesPerSecond as a non-zero rate when bytes flow over time', () => {
    const fn = vi.fn();
    const e = new ProgressEmitter({ totalBytes: 1_000_000, totalParts: 10, onProgress: fn });
    e.recordBytes(100_000);
    vi.advanceTimersByTime(1000);
    e.recordBytes(100_000);
    e.flush();
    const last = fn.mock.calls.at(-1)![0];
    expect(last.bytesPerSecond).toBeGreaterThan(0);
  });

  it('estimatedRemainingMs is 0 when bytesPerSecond is 0 (or zero remaining)', () => {
    const fn = vi.fn();
    const e = new ProgressEmitter({ totalBytes: 100, totalParts: 1, onProgress: fn });
    e.flush();
    const r = fn.mock.calls.at(-1)![0];
    expect(r.estimatedRemainingMs).toBe(0);
  });

  it('totalBytes=0 (streaming input) reports percent=0', () => {
    const fn = vi.fn();
    const e = new ProgressEmitter({ totalBytes: 0, totalParts: 0, onProgress: fn });
    e.recordBytes(500);
    e.flush();
    expect(fn).toHaveBeenLastCalledWith(expect.objectContaining({ totalBytes: 0, percent: 0 }));
  });

  it('does not throw when onProgress is omitted', () => {
    const e = new ProgressEmitter({ totalBytes: 100, totalParts: 1 });
    expect(() => { e.recordBytes(10); e.flush(); }).not.toThrow();
  });

  it('user-supplied onProgress throwing does not break recording', () => {
    const fn = vi.fn(() => { throw new Error('boom'); });
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const e = new ProgressEmitter({ totalBytes: 100, totalParts: 1, onProgress: fn });
    e.recordBytes(50);
    e.flush();
    expect(() => { e.recordBytes(50); e.flush(); }).not.toThrow();
    errSpy.mockRestore();
  });
});
