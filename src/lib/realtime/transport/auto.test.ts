import { describe, it, expect, beforeEach } from 'vitest';
import { resolveTransport, recordTransportFailure, _resetTransportCache } from './index';

describe('resolveTransport', () => {
  beforeEach(() => _resetTransportCache());

  it('returns websocket on first auto attempt with no cache', async () => {
    const result = await resolveTransport({ mode: 'auto' });
    expect(result.kind).toBe('websocket');
    expect(result.reason).toBeUndefined();
  });

  it('returns sse when forced regardless of cache', async () => {
    const result = await resolveTransport({ mode: 'sse' });
    expect(result.kind).toBe('sse');
  });

  it('returns websocket when forced regardless of cache', async () => {
    recordTransportFailure('websocket', 'firewall blocks WS');
    const result = await resolveTransport({ mode: 'websocket' });
    expect(result.kind).toBe('websocket');
  });

  it('falls back to sse on auto when websocket previously failed', async () => {
    recordTransportFailure('websocket', 'connection refused');
    const result = await resolveTransport({ mode: 'auto' });
    expect(result.kind).toBe('sse');
    expect(result.reason).toBe('connection refused');
  });

  it('does not fall back to websocket if SSE previously failed (auto stays on remembered alt)', async () => {
    // If SSE itself fails, we don't have anywhere to fall back to.
    // Auto should still try WS as default. SSE-failure cache is informational.
    recordTransportFailure('sse', 'sse closed');
    const result = await resolveTransport({ mode: 'auto' });
    expect(result.kind).toBe('websocket');
  });

  it('cache persists across calls within a session', async () => {
    recordTransportFailure('websocket', 'blocked');
    expect((await resolveTransport({ mode: 'auto' })).kind).toBe('sse');
    expect((await resolveTransport({ mode: 'auto' })).kind).toBe('sse');
    expect((await resolveTransport({ mode: 'auto' })).kind).toBe('sse');
  });

  it('_resetTransportCache clears state', async () => {
    recordTransportFailure('websocket', 'blocked');
    _resetTransportCache();
    expect((await resolveTransport({ mode: 'auto' })).kind).toBe('websocket');
  });

  it('throws on invalid mode', async () => {
    // @ts-expect-error invalid mode
    await expect(resolveTransport({ mode: 'foo' })).rejects.toThrow();
  });
});
