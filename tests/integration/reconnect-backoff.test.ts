/**
 * K3 — Realtime integration: reconnect with exponential backoff after a
 * server-induced drop.
 *
 * We use real timers with deliberately tiny delays (initial=10ms,
 * multiplier=2, max=200ms, jitter=0) so the test runs in <1s while still
 * exercising the actual reconnect scheduling logic. Fake timers are
 * incompatible with the underlying WebSocket I/O loop, so we keep all
 * configured delays small and assert on the observed `nextDelayMs` values
 * reported via the `onReconnect` telemetry hook.
 */
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { MockServer } from './mock-server';
import { Realtime } from '../../src/lib/realtime';

describe('Realtime integration — reconnect with exponential backoff', () => {
  let server: MockServer;

  beforeAll(async () => {
    server = await MockServer.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it('reconnects after a server drop and resubscribes channels', async () => {
    server.reset();

    let dropOnConnect = 0;
    let connectionIndex = 0;
    const subscribeCounts: number[] = [];

    dropOnConnect = 2; // drop the first two connections; the third must succeed
    server.onConnection((conn) => {
      const myIdx = connectionIndex++;
      subscribeCounts[myIdx] = 0;
      conn.ws.on('message', (raw) => {
        let msg: { type: string; channel?: string };
        try {
          msg = JSON.parse(raw.toString());
        } catch {
          return;
        }
        if (msg.type === 'subscribe' && typeof msg.channel === 'string') {
          subscribeCounts[myIdx]++;
          conn.send({ type: 'subscribed', channel: msg.channel });
          if (myIdx < dropOnConnect) {
            // Abrupt TCP drop — see mock-server.drop() docs for why.
            setTimeout(() => conn.drop(), 30);
          }
        }
      });
    });

    const onReconnect = vi.fn();
    const reconnectDelays: number[] = [];
    const onConnect = vi.fn();

    const rt = new Realtime({
      client: { baseUrl: server.baseUrl, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      reconnect: {
        enabled: true,
        initialDelayMs: 10,
        maxDelayMs: 200,
        jitter: 0,
        maxAttempts: 10,
      },
      heartbeat: { intervalMs: 60_000, timeoutMs: 30_000 },
      onConnect,
      onReconnect: (info) => {
        onReconnect(info);
        reconnectDelays.push(info.nextDelayMs);
      },
    });

    await rt.connect();
    const ch = rt.channel('room:reconnect');
    await ch.subscribe();

    // Wait for the third connection to be established (after two drops).
    await waitFor(() => connectionIndex >= 3, 5_000);
    // Channel must be resubscribed on the new connection.
    await waitFor(() => (subscribeCounts[2] ?? 0) >= 1, 5_000);

    expect(onReconnect).toHaveBeenCalled();
    expect(reconnectDelays.length).toBeGreaterThanOrEqual(2);
    // initialDelayMs=10, jitter=0, attempt-0 from handleDropped → all delays are 10.
    expect(reconnectDelays[0]).toBe(10);
    expect(reconnectDelays[1]).toBe(10);
    // onConnect fires once per successful open: initial + two reconnects.
    expect(onConnect.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(subscribeCounts[2]).toBeGreaterThanOrEqual(1);

    await rt.disconnect();
  });

  it('exponential backoff growth: delay doubles each attempt up to maxDelayMs', async () => {
    // Point the client at a non-listening port. Every open() fails →
    // openInternal's catch block runs `onReconnect({attempt, nextDelayMs})`
    // with strictly increasing `attempt` and exponentially growing `nextDelayMs`.
    const deadPort = await reservedDeadPort();

    const reconnectInfos: Array<{ attempt: number; nextDelayMs: number }> = [];
    const rt = new Realtime({
      client: {
        baseUrl: `http://localhost:${deadPort}`,
        getAuthToken: async () => 'tok',
      },
      transport: 'websocket',
      reconnect: {
        enabled: true,
        initialDelayMs: 10,
        maxDelayMs: 80,
        jitter: 0,
        maxAttempts: 6,
      },
      heartbeat: { intervalMs: 60_000, timeoutMs: 30_000 },
      onReconnect: (info) =>
        reconnectInfos.push({ attempt: info.attempt, nextDelayMs: info.nextDelayMs }),
    });

    try {
      await rt.connect();
    } catch {
      /* expected: first connect attempt fails */
    }

    // Wait for at least 4 reconnect schedules to accumulate.
    await waitFor(() => reconnectInfos.length >= 4, 5_000);

    // Strictly monotonic attempt indices.
    const attempts = reconnectInfos.slice(0, 4).map((r) => r.attempt);
    for (let i = 1; i < attempts.length; i++) {
      expect(attempts[i]).toBeGreaterThan(attempts[i - 1]!);
    }
    // initial=10, mult=2, jitter=0, max=80 → 10, 20, 40, 80, 80, ...
    const expectedDelays = [10, 20, 40, 80];
    for (let i = 0; i < expectedDelays.length; i++) {
      expect(reconnectInfos[i]!.nextDelayMs).toBe(expectedDelays[i]);
    }

    await rt.disconnect();
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

/**
 * Bind to an ephemeral port, capture it, then close the listener. The OS
 * is unlikely to immediately reassign the port, so connections to it will
 * be refused for the duration of the test.
 */
async function reservedDeadPort(): Promise<number> {
  const net = await import('net');
  return new Promise<number>((resolve, reject) => {
    const srv = net.createServer();
    srv.unref();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      srv.close(() => resolve(port));
    });
  });
}
