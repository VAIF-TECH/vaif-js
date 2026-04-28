/**
 * K2 — Realtime integration: connect, subscribe, receive broadcast,
 * send broadcast, unsubscribe, disconnect.
 *
 * Validates the happy-path public-API contract end-to-end against a
 * scriptable mock WS server.
 */
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { MockServer } from './mock-server';
import { Realtime } from '../../src/lib/realtime';

describe('Realtime integration — connect + subscribe + broadcast + unsubscribe', () => {
  let server: MockServer;

  beforeAll(async () => {
    server = await MockServer.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it('completes the full lifecycle: connect → subscribe → recv broadcast → send broadcast → unsubscribe → disconnect', async () => {
    server.reset();

    const received: Array<{ event: string; payload: Record<string, unknown> }> = [];
    const fromClient: Array<{ type: string; channel?: string; event?: string }> = [];
    let unsubscribeSeen = false;

    server.onMessage((conn, msg) => {
      fromClient.push(msg as { type: string; channel?: string; event?: string });
      if (msg.type === 'subscribe' && typeof msg.channel === 'string') {
        conn.send({ type: 'subscribed', channel: msg.channel });
        // Immediately broadcast a hello to the new subscriber
        setImmediate(() => {
          conn.send({
            type: 'broadcast',
            channel: msg.channel,
            event: 'hello',
            payload: { greeting: 'world' },
          });
        });
      } else if (msg.type === 'unsubscribe') {
        unsubscribeSeen = true;
      } else if (msg.type === 'broadcast') {
        // echo broadcasts so we can assert client → server delivery
        conn.send({
          type: 'broadcast',
          channel: msg.channel as string,
          event: 'echo',
          payload: { from: 'server' },
        });
      }
    });

    const onConnect = vi.fn();
    const onDisconnect = vi.fn();
    const onSubscribed = vi.fn();

    const rt = new Realtime({
      client: { baseUrl: server.baseUrl, getAuthToken: async () => 'token-A' },
      transport: 'websocket',
      onConnect,
      onDisconnect,
      onSubscribed,
    });

    await rt.connect();
    expect(onConnect).toHaveBeenCalledTimes(1);
    expect(rt.state.status).toBe('open');

    const ch = rt.channel('room:42');
    ch.on('broadcast', { event: 'hello' }, (p) => {
      received.push({ event: 'hello', payload: p as Record<string, unknown> });
    });
    ch.on('broadcast', { event: 'echo' }, (p) => {
      received.push({ event: 'echo', payload: p as Record<string, unknown> });
    });

    const status = await ch.subscribe();
    expect(status).toBe('SUBSCRIBED');
    expect(ch.isSubscribed).toBe(true);

    // Wait for the auto-broadcast to arrive
    await waitFor(() => received.some((r) => r.event === 'hello'));
    expect(received.find((r) => r.event === 'hello')?.payload).toEqual({ greeting: 'world' });

    // Send a broadcast and wait for the server's echo
    await ch.send({ type: 'broadcast', event: 'ping', payload: { i: 1 } });
    await waitFor(() => received.some((r) => r.event === 'echo'));
    expect(received.find((r) => r.event === 'echo')?.payload).toEqual({ from: 'server' });

    // Unsubscribe — client → server message must be observed
    await ch.unsubscribe();
    await waitFor(() => unsubscribeSeen);
    expect(ch.isSubscribed).toBe(false);

    // Sanity-check the client → server message stream
    const types = fromClient.map((m) => m.type);
    expect(types).toContain('subscribe');
    expect(types).toContain('broadcast');
    expect(types).toContain('unsubscribe');

    await rt.disconnect();
    // Allow the close event to fire on the server side
    await waitFor(() => onDisconnect.mock.calls.length > 0);
    expect(onDisconnect).toHaveBeenCalled();
    expect(rt.state.status).toBe('closed');
  });
});

async function waitFor(predicate: () => boolean, timeoutMs = 1000): Promise<void> {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`waitFor timed out after ${timeoutMs}ms`);
    }
    await new Promise((r) => setTimeout(r, 10));
  }
}
