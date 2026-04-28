/**
 * K5 — Realtime integration: backpressure under sustained outbound load.
 *
 * The SDK applies a client-side rate limit (50 msg/s) mirroring the server's
 * cap. When the rate bucket is exhausted, outgoing messages are queued. When
 * the queue exceeds `outgoingQueue.maxSize`, the configured drop policy fires
 * `onMessageDropped`. With the default `oldest` policy, the head of the queue
 * is dropped to make room for the newest message.
 *
 * Scenario:
 *   - Server stalls (does NOT consume messages on the wire — but on Node
 *     `ws.send` is non-blocking, so we model "stall" as the rate-bucket
 *     simply running out before the queue drains).
 *   - Client emits 200 broadcasts in a tight loop.
 *   - We expect ≥ N drops with reason='queue_full' where
 *     200 - 50 (rate-bucket allowance) - 100 (queue maxSize) = 50 drops.
 */
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { MockServer } from './mock-server';
import { Realtime } from '../../src/lib/realtime';

describe('Realtime integration — backpressure', () => {
  let server: MockServer;

  beforeAll(async () => {
    server = await MockServer.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it('drops oldest messages with reason=queue_full when emit rate exceeds rate bucket + queue capacity', async () => {
    server.reset();
    // Stall: never ack subscribes, never read messages further. Subscribe must
    // still resolve, so we ack the subscribe immediately.
    server.onConnection((conn) => {
      conn.ws.on('message', (raw) => {
        let msg: { type: string; channel?: string };
        try {
          msg = JSON.parse(raw.toString());
        } catch {
          return;
        }
        if (msg.type === 'subscribe' && typeof msg.channel === 'string') {
          conn.send({ type: 'subscribed', channel: msg.channel });
        }
        // Otherwise: stall. We don't reply to broadcasts. Crucially we also
        // don't read further from the SDK's perspective — but ws.send() on
        // Node is non-blocking, so this stall only matters semantically (the
        // server has no observable effect on backpressure measurement).
      });
    });

    const dropped: Array<{ reason: string; type: string }> = [];

    const rt = new Realtime({
      client: { baseUrl: server.baseUrl, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      heartbeat: { intervalMs: 60_000, timeoutMs: 30_000 },
      outgoingQueue: { maxSize: 100, onDrop: 'oldest' },
      onMessageDropped: (info) => {
        dropped.push({ reason: info.reason, type: info.msg.type });
      },
    });

    await rt.connect();
    const ch = rt.channel('room:bp');
    await ch.subscribe();

    // Fire 200 broadcasts back-to-back. Awaiting `send()` is fine because
    // it returns as soon as the transport.send Promise resolves (or the
    // message is enqueued).
    for (let i = 0; i < 200; i++) {
      // Fire and forget — we don't want awaiting to give the rate bucket
      // time to refill via the event loop.
      void ch.send({ type: 'broadcast', event: 'tick', payload: { i } });
    }

    // Yield once so the synchronous enqueue path completes.
    await Promise.resolve();
    await new Promise((r) => setImmediate(r));

    // Rate bucket capacity = 50 → up to 50 sent directly.
    // Queue maxSize = 100 → next 100 sit in queue.
    // Remaining 50 trigger 'oldest' drop policy → 50 dropped.
    expect(dropped.length).toBeGreaterThanOrEqual(40);
    expect(dropped.length).toBeLessThanOrEqual(60);
    for (const d of dropped) {
      expect(d.reason).toBe('queue_full');
      expect(d.type).toBe('broadcast');
    }

    await rt.disconnect();
  });

  it('drop policy newest: newest messages are rejected and the queue is preserved', async () => {
    server.reset();
    server.onConnection((conn) => {
      conn.ws.on('message', (raw) => {
        let msg: { type: string; channel?: string };
        try {
          msg = JSON.parse(raw.toString());
        } catch {
          return;
        }
        if (msg.type === 'subscribe' && typeof msg.channel === 'string') {
          conn.send({ type: 'subscribed', channel: msg.channel });
        }
      });
    });

    const dropped: Array<{ reason: string; payload: unknown }> = [];
    const rt = new Realtime({
      client: { baseUrl: server.baseUrl, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      heartbeat: { intervalMs: 60_000, timeoutMs: 30_000 },
      outgoingQueue: { maxSize: 100, onDrop: 'newest' },
      onMessageDropped: (info) => {
        const p = (info.msg as { payload?: unknown }).payload;
        dropped.push({ reason: info.reason, payload: p });
      },
    });

    await rt.connect();
    const ch = rt.channel('room:bp2');
    await ch.subscribe();

    for (let i = 0; i < 200; i++) {
      void ch.send({ type: 'broadcast', event: 'tick', payload: { i } });
    }
    await Promise.resolve();
    await new Promise((r) => setImmediate(r));

    expect(dropped.length).toBeGreaterThanOrEqual(40);
    // Under 'newest' policy, the dropped payloads are the highest indices
    // (because the queue keeps the oldest entries).
    for (const d of dropped) {
      const idx = (d.payload as { i?: number } | undefined)?.i;
      expect(typeof idx).toBe('number');
      // The dropped index should be in the "tail" of the run, i.e. >= 100.
      expect(idx!).toBeGreaterThanOrEqual(100);
    }

    await rt.disconnect();
  });
});
