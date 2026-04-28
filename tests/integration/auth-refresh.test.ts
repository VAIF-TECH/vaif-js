/**
 * K4 — Realtime integration: Path B auth refresh mid-flight.
 *
 * `refreshAuth()` must:
 *   - Fetch a fresh token via `client.getAuthToken`
 *   - Open a NEW transport with that token
 *   - Replay subscribe messages on the new socket BEFORE swapping
 *   - Atomically swap the transport (suppressing the old socket's close)
 *   - Continue dispatching broadcasts on the new socket without missing them
 */
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { MockServer, type MockConnection } from './mock-server';
import { Realtime } from '../../src/lib/realtime';

describe('Realtime integration — Path B auth refresh', () => {
  let server: MockServer;

  beforeAll(async () => {
    server = await MockServer.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it('refreshAuth opens a new socket, resubscribes, swaps atomically, and routes new broadcasts', async () => {
    server.reset();

    type ConnInfo = { idx: number; token: string | null; subscribes: string[]; conn: MockConnection };
    const conns: ConnInfo[] = [];
    let nextIdx = 0;

    server.onConnection((conn) => {
      const myIdx = nextIdx++;
      const info: ConnInfo = { idx: myIdx, token: conn.token, subscribes: [], conn };
      conns.push(info);

      conn.ws.on('message', (raw) => {
        let msg: { type: string; channel?: string };
        try {
          msg = JSON.parse(raw.toString());
        } catch {
          return;
        }
        if (msg.type === 'subscribe' && typeof msg.channel === 'string') {
          info.subscribes.push(msg.channel);
          conn.send({ type: 'subscribed', channel: msg.channel });
        }
      });
    });

    let currentToken = 'token-v1';
    const onMessageReceived = vi.fn();

    const rt = new Realtime({
      client: {
        baseUrl: server.baseUrl,
        getAuthToken: async () => currentToken,
      },
      transport: 'websocket',
      heartbeat: { intervalMs: 60_000, timeoutMs: 30_000 },
      onMessageReceived,
    });

    await rt.connect();
    const ch = rt.channel('room:auth');
    let lastBroadcast: Record<string, unknown> | null = null;
    ch.on('broadcast', { event: 'tick' }, (p) => {
      lastBroadcast = p as Record<string, unknown>;
    });
    await ch.subscribe();

    // Sanity: first connection used token-v1.
    expect(conns.length).toBe(1);
    expect(conns[0]!.token).toBe('token-v1');
    expect(conns[0]!.subscribes).toEqual(['room:auth']);

    // Rotate token + refresh.
    currentToken = 'token-v2';
    await rt.refreshAuth();

    // Wait for the second connection's replayed subscribe.
    await waitFor(() => conns.length >= 2 && conns[1]!.subscribes.length >= 1, 3_000);

    expect(conns[1]!.token).toBe('token-v2');
    expect(conns[1]!.subscribes).toEqual(['room:auth']);

    // Broadcast from the new (second) connection — verify the SDK now
    // dispatches messages from the post-swap socket.
    conns[1]!.conn.send({
      type: 'broadcast',
      channel: 'room:auth',
      event: 'tick',
      payload: { v: 2 },
    });
    await waitFor(() => lastBroadcast !== null, 1_000);
    expect(lastBroadcast).toEqual({ v: 2 });

    // After the swap, the old socket should be closed → only one active connection.
    await waitFor(() => server.connectionCount() === 1, 1_000);
    expect(server.connectionCount()).toBe(1);

    await rt.disconnect();
  });

  it('refreshAuth rejects when not connected', async () => {
    const rt = new Realtime({
      client: { baseUrl: server.baseUrl, getAuthToken: async () => 'tok' },
      transport: 'websocket',
    });
    await expect(rt.refreshAuth()).rejects.toThrow();
  });
});

async function waitFor(predicate: () => boolean, timeoutMs = 1000): Promise<void> {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error(`waitFor timed out after ${timeoutMs}ms`);
    }
    await new Promise((r) => setTimeout(r, 5));
  }
}
