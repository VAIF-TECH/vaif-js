import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Heartbeat } from './heartbeat';

describe('Heartbeat', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('sends ping at intervalMs', () => {
    const onPing = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout: () => {} });
    hb.start();
    expect(onPing).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(onPing).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(1000);
    expect(onPing).toHaveBeenCalledTimes(2);
    hb.stop();
  });

  it('fires onTimeout when no pong within timeoutMs after ping', () => {
    const onTimeout = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing: () => {}, onTimeout });
    hb.start();
    vi.advanceTimersByTime(1000);
    expect(onTimeout).not.toHaveBeenCalled();
    vi.advanceTimersByTime(500);
    expect(onTimeout).toHaveBeenCalledOnce();
    hb.stop();
  });

  it('cancels pending timeout when pong arrives', () => {
    const onTimeout = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing: () => {}, onTimeout });
    hb.start();
    vi.advanceTimersByTime(1000);
    hb.recordPong();
    vi.advanceTimersByTime(500);
    expect(onTimeout).not.toHaveBeenCalled();
    hb.stop();
  });

  it('stops cleanly', () => {
    const onPing = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout: () => {} });
    hb.start();
    hb.stop();
    vi.advanceTimersByTime(5000);
    expect(onPing).not.toHaveBeenCalled();
  });

  it('changes interval when setIntervalMs called while running', () => {
    const onPing = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout: () => {} });
    hb.start();
    hb.setIntervalMs(2000);
    vi.advanceTimersByTime(1000);
    expect(onPing).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(onPing).toHaveBeenCalledTimes(1);
    hb.stop();
  });

  it('setIntervalMs while stopped does not start', () => {
    const onPing = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout: () => {} });
    hb.setIntervalMs(2000);
    vi.advanceTimersByTime(5000);
    expect(onPing).not.toHaveBeenCalled();
  });

  it('multiple start() calls are idempotent', () => {
    const onPing = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout: () => {} });
    hb.start();
    hb.start(); // idempotent — should not double-schedule
    vi.advanceTimersByTime(1000);
    expect(onPing).toHaveBeenCalledTimes(1);
    hb.stop();
  });

  it('throws on intervalMs <= 0', () => {
    expect(() => new Heartbeat({ intervalMs: 0, timeoutMs: 500, onPing: () => {}, onTimeout: () => {} })).toThrow();
    expect(() => new Heartbeat({ intervalMs: -1, timeoutMs: 500, onPing: () => {}, onTimeout: () => {} })).toThrow();
  });

  it('throws on timeoutMs <= 0', () => {
    expect(() => new Heartbeat({ intervalMs: 1000, timeoutMs: 0, onPing: () => {}, onTimeout: () => {} })).toThrow();
  });

  it('recordPong with no pending timeout is a no-op', () => {
    const onTimeout = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing: () => {}, onTimeout });
    hb.start();
    hb.recordPong(); // no ping has fired yet
    vi.advanceTimersByTime(2000); // ping fires at 1000, timeout would fire at 1500
    expect(onTimeout).toHaveBeenCalledOnce();
    hb.stop();
  });

  it('survives onPing throwing', () => {
    const onPing = vi.fn(() => { throw new Error('boom'); });
    const onTimeout = vi.fn();
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout });
    // suppress console.error noise during this test
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    hb.start();
    vi.advanceTimersByTime(1000);
    expect(onPing).toHaveBeenCalled();
    vi.advanceTimersByTime(500);
    // onTimeout should still fire — heartbeat is alive
    expect(onTimeout).toHaveBeenCalled();
    // onPing should fire again on next interval too
    vi.advanceTimersByTime(1000);
    expect(onPing).toHaveBeenCalledTimes(2);
    errSpy.mockRestore();
    hb.stop();
  });

  it('survives onTimeout throwing', () => {
    const onPing = vi.fn();
    const onTimeout = vi.fn(() => { throw new Error('boom'); });
    const hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout });
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    hb.start();
    vi.advanceTimersByTime(1500); // ping at 1000, timeout at 1500
    expect(onTimeout).toHaveBeenCalled();
    // next interval fires another ping
    vi.advanceTimersByTime(500);
    expect(onPing).toHaveBeenCalledTimes(2);
    errSpy.mockRestore();
    hb.stop();
  });

  it('clears orphaned timeoutTimer when next ping fires', () => {
    const onTimeout = vi.fn();
    // intervalMs < timeoutMs → next ping arrives before previous timeout fires
    const hb = new Heartbeat({ intervalMs: 100, timeoutMs: 500, onPing: () => {}, onTimeout });
    hb.start();
    vi.advanceTimersByTime(100); // ping #1, timeout scheduled at 600
    vi.advanceTimersByTime(100); // ping #2 should clear ping #1's timeout, schedule new at 700
    // Push interval far out so no more pings fire and we can isolate ping #2's timeout.
    hb.setIntervalMs(1_000_000);
    vi.advanceTimersByTime(400); // total 600 — would have fired ping #1's timeout if not cleared
    expect(onTimeout).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100); // total 700 — ping #2's timeout fires
    expect(onTimeout).toHaveBeenCalledOnce();
    hb.stop();
  });

  it('stop() called from within onPing prevents next firing', () => {
    const onPing = vi.fn();
    let hb: Heartbeat;
    onPing.mockImplementation(() => hb.stop());
    hb = new Heartbeat({ intervalMs: 1000, timeoutMs: 500, onPing, onTimeout: () => {} });
    hb.start();
    vi.advanceTimersByTime(5000);
    expect(onPing).toHaveBeenCalledTimes(1); // only the first ping fired
  });
});
