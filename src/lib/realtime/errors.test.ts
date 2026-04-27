import { describe, it, expect } from 'vitest';
import { RealtimeError, ConnectionError, SubscriptionError, ProtocolError } from './errors';

describe('error hierarchy', () => {
  it('RealtimeError is the base class', () => {
    const e = new RealtimeError('test', 'generic');
    expect(e).toBeInstanceOf(Error);
    expect(e).toBeInstanceOf(RealtimeError);
    expect(e.code).toBe('generic');
    expect(e.name).toBe('RealtimeError');
    expect(e.message).toBe('test');
  });

  it('ConnectionError extends RealtimeError', () => {
    const e = new ConnectionError('failed', 'connection_failed');
    expect(e).toBeInstanceOf(RealtimeError);
    expect(e).toBeInstanceOf(ConnectionError);
    expect(e).not.toBeInstanceOf(SubscriptionError);
    expect(e.name).toBe('ConnectionError');
    expect(e.code).toBe('connection_failed');
  });

  it('SubscriptionError carries channel context', () => {
    const e = new SubscriptionError('rate limited', 'rate_limited', { channel: 'room:1' });
    expect(e.channel).toBe('room:1');
    expect(e.name).toBe('SubscriptionError');
  });

  it('ProtocolError carries cause', () => {
    const orig = new Error('original');
    const e = new ProtocolError('bad message', 'invalid_message', { cause: orig });
    expect((e as any).cause).toBe(orig);
    expect(e.name).toBe('ProtocolError');
  });

  it('cause is omitted when not provided', () => {
    const e = new RealtimeError('plain', 'plain');
    expect((e as any).cause).toBeUndefined();
  });

  it('all subclasses correctly identify via instanceof RealtimeError', () => {
    expect(new ConnectionError('a', 'b')).toBeInstanceOf(RealtimeError);
    expect(new SubscriptionError('a', 'b')).toBeInstanceOf(RealtimeError);
    expect(new ProtocolError('a', 'b')).toBeInstanceOf(RealtimeError);
  });

  it('prototype chain is preserved (instanceof works after JSON-ish round-trip via stack frame)', () => {
    function thrower(): never { throw new ConnectionError('x', 'y'); }
    try {
      thrower();
    } catch (e) {
      expect(e).toBeInstanceOf(ConnectionError);
      expect(e).toBeInstanceOf(RealtimeError);
      expect(e).toBeInstanceOf(Error);
    }
  });

  it('stack trace is captured', () => {
    const e = new RealtimeError('with stack', 'code');
    expect(typeof e.stack).toBe('string');
    expect(e.stack!.length).toBeGreaterThan(0);
  });
});
