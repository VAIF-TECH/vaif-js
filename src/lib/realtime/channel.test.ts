import { describe, it, expect, vi } from 'vitest';
import { Channel } from './channel';
import type { ClientMessage, ServerMessage } from './protocol';

const noopSend = async (_: ClientMessage) => {};

function makeChannel(name = 'room:1', sender: (msg: ClientMessage) => Promise<void> = noopSend) {
  return new Channel(name, sender, { subscribeTimeoutMs: 100 });
}

describe('Channel basics', () => {
  it('exposes its name', () => {
    const ch = makeChannel('room:42');
    expect(ch.name).toBe('room:42');
  });

  it('starts unsubscribed', () => {
    const ch = makeChannel();
    expect(ch.isSubscribed).toBe(false);
  });
});

describe('Channel.on registration', () => {
  it('registers postgres_changes handler', () => {
    const ch = makeChannel();
    expect(() => ch.on('postgres_changes', { event: 'INSERT', table: 'messages' }, () => {})).not.toThrow();
  });

  it('registers broadcast handler', () => {
    const ch = makeChannel();
    expect(() => ch.on('broadcast', { event: 'typing' }, () => {})).not.toThrow();
  });

  it('registers presence handler', () => {
    const ch = makeChannel();
    expect(() => ch.on('presence', { event: 'sync' }, () => {})).not.toThrow();
  });

  it('returns the channel for chaining', () => {
    const ch = makeChannel();
    const r = ch.on('broadcast', { event: 'a' }, () => {});
    expect(r).toBe(ch);
  });
});

describe('Channel.subscribe', () => {
  it('sends a subscribe message and resolves SUBSCRIBED on ack', async () => {
    const sent: ClientMessage[] = [];
    const sender = async (m: ClientMessage) => { sent.push(m); };
    const ch = makeChannel('room:1', sender);
    const p = ch.subscribe();
    // simulate server ack
    setTimeout(() => ch._dispatch({ type: 'subscribed', channel: 'room:1' } as ServerMessage), 10);
    const status = await p;
    expect(status).toBe('SUBSCRIBED');
    expect(sent).toContainEqual({ type: 'subscribe', channel: 'room:1' });
    expect(ch.isSubscribed).toBe(true);
  });

  it('rejects with TIMED_OUT if no ack within timeout', async () => {
    const ch = new Channel('room:1', noopSend, { subscribeTimeoutMs: 50 });
    const status = await ch.subscribe();
    expect(status).toBe('TIMED_OUT');
    expect(ch.isSubscribed).toBe(false);
  });

  it('resolves CHANNEL_ERROR on server error for this channel', async () => {
    const ch = makeChannel();
    const p = ch.subscribe();
    setTimeout(() => ch._dispatch({ type: 'error', code: 'subscribe_failed', message: 'no perms', channel: 'room:1' } as ServerMessage), 10);
    const status = await p;
    expect(status).toBe('CHANNEL_ERROR');
  });
});

describe('Channel filter dispatch — postgres_changes', () => {
  it('matches event INSERT and table', async () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('postgres_changes', { event: 'INSERT', table: 'messages' }, cb);
    await ch.subscribe(); ch._dispatch({ type: 'subscribed', channel: 'room:1' } as ServerMessage);

    ch._dispatch({
      type: 'db_change', projectId: 'p', schema: 'public',
      table: 'messages', op: 'INSERT', record: { id: 1 }, ts: 'now',
    } as ServerMessage);
    expect(cb).toHaveBeenCalledOnce();
    const arg = cb.mock.calls[0]?.[0];
    expect(arg?.op).toBe('INSERT');
    expect(arg?.table).toBe('messages');
    expect(arg?.record).toEqual({ id: 1 });
  });

  it('does not match different op', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('postgres_changes', { event: 'INSERT', table: 'messages' }, cb);
    ch._dispatch({
      type: 'db_change', projectId: 'p', schema: 'public',
      table: 'messages', op: 'UPDATE', record: { id: 1 }, ts: 'now',
    } as ServerMessage);
    expect(cb).not.toHaveBeenCalled();
  });

  it('does not match different table', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('postgres_changes', { event: 'INSERT', table: 'messages' }, cb);
    ch._dispatch({
      type: 'db_change', projectId: 'p', schema: 'public',
      table: 'users', op: 'INSERT', record: { id: 1 }, ts: 'now',
    } as ServerMessage);
    expect(cb).not.toHaveBeenCalled();
  });

  it('event=* matches all ops', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('postgres_changes', { event: '*', table: 'messages' }, cb);
    for (const op of ['INSERT', 'UPDATE', 'DELETE'] as const) {
      ch._dispatch({
        type: 'db_change', projectId: 'p', schema: 'public',
        table: 'messages', op, ts: 'now',
      } as ServerMessage);
    }
    expect(cb).toHaveBeenCalledTimes(3);
  });

  it('schema filter matches', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('postgres_changes', { event: 'INSERT', table: 'messages', schema: 'public' }, cb);
    ch._dispatch({
      type: 'db_change', projectId: 'p', schema: 'tenant_x',
      table: 'messages', op: 'INSERT', ts: 'now',
    } as ServerMessage);
    expect(cb).not.toHaveBeenCalled();
  });
});

describe('Channel filter dispatch — broadcast', () => {
  it('matches by event name', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('broadcast', { event: 'typing' }, cb);
    ch._dispatch({ type: 'broadcast', channel: 'room:1', event: 'typing', payload: { user: 'a' } } as ServerMessage);
    expect(cb).toHaveBeenCalledWith({ user: 'a' });
  });

  it('does not match different event', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('broadcast', { event: 'typing' }, cb);
    ch._dispatch({ type: 'broadcast', channel: 'room:1', event: 'message', payload: {} } as ServerMessage);
    expect(cb).not.toHaveBeenCalled();
  });

  it('handles broadcast without payload (empty object)', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('broadcast', { event: 'ping' }, cb);
    ch._dispatch({ type: 'broadcast', channel: 'room:1', event: 'ping' } as ServerMessage);
    expect(cb).toHaveBeenCalledWith({});
  });
});

describe('Channel filter dispatch — presence', () => {
  it('event=sync fires after presence_sync', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('presence', { event: 'sync' }, cb);
    ch._dispatch({ type: 'presence_sync', channel: 'room:1', state: { alice: [{}] } } as ServerMessage);
    expect(cb).toHaveBeenCalledOnce();
  });

  it('event=join fires on presence_join', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('presence', { event: 'join' }, cb);
    ch._dispatch({ type: 'presence_join', key: 'alice', current: [{}], joined: [{}] } as ServerMessage);
    expect(cb).toHaveBeenCalledOnce();
  });

  it('event=leave fires on presence_leave', () => {
    const ch = makeChannel();
    const cb = vi.fn();
    ch.on('presence', { event: 'leave' }, cb);
    ch._dispatch({ type: 'presence_leave', key: 'alice', current: [], left: [{}] } as ServerMessage);
    expect(cb).toHaveBeenCalledOnce();
  });

  it('presenceState returns current tracked state', () => {
    const ch = makeChannel();
    ch._dispatch({ type: 'presence_sync', channel: 'room:1', state: { alice: [{ status: 'online' }] } } as ServerMessage);
    expect(ch.presenceState()).toEqual({ alice: [{ status: 'online' }] });
  });
});

describe('Channel send/track/untrack/unsubscribe', () => {
  it('send dispatches a broadcast message with the channel name', async () => {
    const sent: ClientMessage[] = [];
    const ch = makeChannel('room:1', async (m) => { sent.push(m); });
    await ch.send({ type: 'broadcast', event: 'typing', payload: { user: 'a' } });
    expect(sent).toContainEqual({ type: 'broadcast', channel: 'room:1', event: 'typing', payload: { user: 'a' } });
  });

  it('track dispatches presence_track', async () => {
    const sent: ClientMessage[] = [];
    const ch = makeChannel('room:1', async (m) => { sent.push(m); });
    await ch.track({ user_id: 'abc' });
    expect(sent).toContainEqual({ type: 'presence_track', state: { user_id: 'abc' } });
  });

  it('untrack dispatches presence_untrack', async () => {
    const sent: ClientMessage[] = [];
    const ch = makeChannel('room:1', async (m) => { sent.push(m); });
    await ch.untrack();
    expect(sent).toContainEqual({ type: 'presence_untrack' });
  });

  it('unsubscribe dispatches unsubscribe and clears subscribed flag', async () => {
    const sent: ClientMessage[] = [];
    const ch = makeChannel('room:1', async (m) => { sent.push(m); });
    const p = ch.subscribe();
    ch._dispatch({ type: 'subscribed', channel: 'room:1' } as ServerMessage);
    await p;
    expect(ch.isSubscribed).toBe(true);
    await ch.unsubscribe();
    expect(sent).toContainEqual({ type: 'unsubscribe', channel: 'room:1' });
    expect(ch.isSubscribed).toBe(false);
  });
});

describe('Channel handler error resilience', () => {
  it('one handler throwing does not stop others', () => {
    const ch = makeChannel();
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const a = vi.fn(() => { throw new Error('boom'); });
    const b = vi.fn();
    ch.on('broadcast', { event: 'x' }, a);
    ch.on('broadcast', { event: 'x' }, b);
    ch._dispatch({ type: 'broadcast', channel: 'room:1', event: 'x' } as ServerMessage);
    expect(a).toHaveBeenCalled();
    expect(b).toHaveBeenCalled();
    errSpy.mockRestore();
  });
});
