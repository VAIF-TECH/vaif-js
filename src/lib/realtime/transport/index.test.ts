import { describe, it, expect } from 'vitest';
import { createTransport, type Transport } from './index';

describe('createTransport', () => {
  it('creates a websocket transport when kind=websocket', () => {
    const t: Transport = createTransport({ kind: 'websocket' });
    expect(t.capabilities.bidirectional).toBe(true);
    expect(t.capabilities.binarySupport).toBe(true);
    expect(t.capabilities.serverPush).toBe(true);
  });

  it('creates an sse transport when kind=sse', () => {
    const t: Transport = createTransport({ kind: 'sse' });
    expect(t.capabilities.bidirectional).toBe(false);
    expect(t.capabilities.binarySupport).toBe(false);
    expect(t.capabilities.serverPush).toBe(true);
  });

  it('throws on unknown kind', () => {
    // @ts-expect-error invalid kind
    expect(() => createTransport({ kind: 'foo' })).toThrow();
  });
});
