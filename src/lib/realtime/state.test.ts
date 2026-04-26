import { describe, it, expect, vi } from 'vitest';
import { ConnectionStateMachine, InvalidTransitionError } from './state';

describe('ConnectionStateMachine', () => {
  it('starts in idle', () => {
    const sm = new ConnectionStateMachine();
    expect(sm.state.status).toBe('idle');
  });

  it('idle → connecting on connect_requested', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    expect(sm.state).toEqual({ status: 'connecting', attempt: 0 });
  });

  it('connecting → open on opened', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'opened', transport: 'websocket' });
    expect(sm.state).toEqual({ status: 'open', transport: 'websocket' });
  });

  it('connecting → backing-off on connect_failed', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'connect_failed', error: new Error('refused'), nextDelayMs: 1000 });
    expect(sm.state).toMatchObject({ status: 'backing-off', attempt: 0, nextDelayMs: 1000 });
  });

  it('open → reconnecting on dropped', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'opened', transport: 'websocket' });
    sm.transition({ type: 'dropped', error: new Error('network') });
    expect(sm.state.status).toBe('reconnecting');
  });

  it('backing-off → connecting on reconnect_attempt', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'connect_failed', error: new Error('x'), nextDelayMs: 100 });
    sm.transition({ type: 'reconnect_attempt', attempt: 1 });
    expect(sm.state).toEqual({ status: 'connecting', attempt: 1 });
  });

  it('reconnecting → open on opened (fast retry)', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'opened', transport: 'websocket' });
    sm.transition({ type: 'dropped', error: new Error('x') });
    sm.transition({ type: 'opened', transport: 'websocket' });
    expect(sm.state.status).toBe('open');
  });

  it('reconnecting → backing-off on backoff_started', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'opened', transport: 'websocket' });
    sm.transition({ type: 'dropped', error: new Error('x') });
    sm.transition({ type: 'backoff_started', attempt: 2, nextDelayMs: 4000 });
    expect(sm.state).toMatchObject({ status: 'backing-off', attempt: 2, nextDelayMs: 4000 });
  });

  it('backing-off → closed on retry_exhausted', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'connect_failed', error: new Error('x'), nextDelayMs: 100 });
    sm.transition({ type: 'retry_exhausted' });
    expect(sm.state.status).toBe('closed');
  });

  it('any state → closed on disconnect_requested', () => {
    const states: Array<() => ConnectionStateMachine> = [
      () => { const s = new ConnectionStateMachine(); return s; },
      () => { const s = new ConnectionStateMachine(); s.transition({ type: 'connect_requested' }); return s; },
      () => { const s = new ConnectionStateMachine(); s.transition({ type: 'connect_requested' }); s.transition({ type: 'opened', transport: 'websocket' }); return s; },
    ];
    for (const make of states) {
      const sm = make();
      sm.transition({ type: 'disconnect_requested' });
      expect(sm.state.status).toBe('closed');
    }
  });

  it('closed → connecting on connect_requested (re-open after disconnect)', () => {
    const sm = new ConnectionStateMachine();
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'disconnect_requested' });
    sm.transition({ type: 'connect_requested' });
    expect(sm.state.status).toBe('connecting');
  });

  it('throws InvalidTransitionError on illegal transition', () => {
    const sm = new ConnectionStateMachine();
    expect(() => sm.transition({ type: 'opened', transport: 'websocket' })).toThrow(InvalidTransitionError);
  });

  it('emits onChange for every transition', () => {
    const log: string[] = [];
    const sm = new ConnectionStateMachine();
    sm.onChange((s) => log.push(s.status));
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'opened', transport: 'websocket' });
    expect(log).toEqual(['connecting', 'open']);
  });

  it('multiple onChange listeners all fire', () => {
    const sm = new ConnectionStateMachine();
    const a = vi.fn(); const b = vi.fn();
    sm.onChange(a); sm.onChange(b);
    sm.transition({ type: 'connect_requested' });
    expect(a).toHaveBeenCalledOnce();
    expect(b).toHaveBeenCalledOnce();
  });

  it('offChange removes the listener', () => {
    const sm = new ConnectionStateMachine();
    const cb = vi.fn();
    sm.onChange(cb);
    sm.transition({ type: 'connect_requested' });
    expect(cb).toHaveBeenCalledTimes(1);
    sm.offChange(cb);
    sm.transition({ type: 'opened', transport: 'websocket' });
    expect(cb).toHaveBeenCalledTimes(1); // not called again
  });

  it('offChange is a no-op if cb was never registered', () => {
    const sm = new ConnectionStateMachine();
    expect(() => sm.offChange(() => {})).not.toThrow();
  });

  it('listener throwing does not break further transitions', () => {
    const sm = new ConnectionStateMachine();
    sm.onChange(() => { throw new Error('boom'); });
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    sm.transition({ type: 'connect_requested' });
    sm.transition({ type: 'opened', transport: 'websocket' });
    expect(sm.state.status).toBe('open');
    errSpy.mockRestore();
  });
});
