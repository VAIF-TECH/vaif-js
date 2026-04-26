import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import { WebSocketServer } from 'ws';
import { RealtimeClient } from './client';
import { _resetTransportCache } from './transport/index';

describe('RealtimeClient', () => {
  let server: WebSocketServer;
  let port: number;

  beforeAll(async () => {
    server = new WebSocketServer({ port: 0 });
    await new Promise<void>((r) => server.on('listening', () => r()));
    port = (server.address() as { port: number }).port;
  });

  afterAll(() => new Promise<void>((r) => server.close(() => r())));

  beforeEach(() => _resetTransportCache());

  it('connects, opens, fires onConnect', async () => {
    server.removeAllListeners('connection');
    server.on('connection', () => {});

    const onConnect = vi.fn();
    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      onConnect,
    });
    await rt.connect();
    expect(onConnect).toHaveBeenCalled();
    expect(rt.state.status).toBe('open');
    await rt.disconnect();
  });

  it('disconnects cleanly', async () => {
    server.removeAllListeners('connection');
    server.on('connection', () => {});
    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
    });
    await rt.connect();
    await rt.disconnect();
    expect(rt.state.status).toBe('closed');
  });

  it('channel(name) returns the same instance on repeat calls', () => {
    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
    });
    const a = rt.channel('room:1');
    const b = rt.channel('room:1');
    expect(a).toBe(b);
  });

  it('routes server messages to the correct channel', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'subscribe') {
          ws.send(JSON.stringify({ type: 'subscribed', channel: msg.channel }));
          setTimeout(() => {
            ws.send(
              JSON.stringify({
                type: 'broadcast',
                channel: msg.channel,
                event: 'hello',
                payload: { x: 1 },
              }),
            );
          }, 30);
        }
      });
    });

    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
    });
    await rt.connect();
    const ch = rt.channel('room:1');
    let received: Record<string, unknown> | null = null;
    ch.on('broadcast', { event: 'hello' }, (p) => {
      received = p as Record<string, unknown>;
    });
    await ch.subscribe();
    await new Promise((r) => setTimeout(r, 100));
    expect(received).toEqual({ x: 1 });
    await rt.disconnect();
  });

  it('reconnects on server drop and resubscribes', async () => {
    let conn = 0;
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      conn++;
      ws.on('message', (raw) => {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'subscribe') {
          ws.send(JSON.stringify({ type: 'subscribed', channel: msg.channel }));
        }
      });
      // Drop the FIRST connection after a short delay
      if (conn === 1) setTimeout(() => ws.close(1011, 'simulated'), 50);
    });

    const onReconnect = vi.fn();
    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      reconnect: { initialDelayMs: 10, maxDelayMs: 50, jitter: 0 },
      onReconnect,
    });
    await rt.connect();
    const ch = rt.channel('room:1');
    await ch.subscribe();
    expect(ch.isSubscribed).toBe(true);

    // Wait for drop + reconnect + resubscribe
    await new Promise((r) => setTimeout(r, 500));

    expect(onReconnect).toHaveBeenCalled();
    expect(rt.state.status).toBe('open');
    expect(ch.isSubscribed).toBe(true);
    await rt.disconnect();
  });

  it('queues sends while not open and drains on connect', async () => {
    server.removeAllListeners('connection');
    const received: Array<Record<string, unknown>> = [];
    server.on('connection', (ws) => {
      ws.on('message', (raw) => received.push(JSON.parse(raw.toString())));
    });

    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
    });
    // Don't await connect — instead start it and immediately enqueue
    const connectPromise = rt.connect();
    const ch = rt.channel('room:queued');
    // subscribe call may queue if not yet open
    void ch.subscribe();
    await connectPromise;
    await new Promise((r) => setTimeout(r, 100));
    expect(received.some((m) => m['type'] === 'subscribe' && m['channel'] === 'room:queued')).toBe(true);
    await rt.disconnect();
  });

  it('refreshAuth opens a new socket, replays subscriptions, swaps atomically', async () => {
    let conn = 0;
    const subscribed: string[] = [];
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      conn++;
      ws.on('message', (raw) => {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'subscribe') {
          subscribed.push(`conn${conn}:${msg.channel}`);
          ws.send(JSON.stringify({ type: 'subscribed', channel: msg.channel }));
        }
      });
    });

    let token = 'tok-1';
    const onDisconnect = vi.fn();
    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => token },
      transport: 'websocket',
      onDisconnect,
    });
    await rt.connect();
    const ch = rt.channel('room:swap');
    await ch.subscribe();
    await new Promise((r) => setTimeout(r, 50));
    expect(subscribed).toContain('conn1:room:swap');
    expect(ch.isSubscribed).toBe(true);

    token = 'tok-2';
    await rt.refreshAuth();
    await new Promise((r) => setTimeout(r, 100));

    // Should have a second connection with the same channel resubscribed
    expect(subscribed).toContain('conn2:room:swap');
    expect(ch.isSubscribed).toBe(true);
    // refreshAuth should NOT have triggered a user-visible disconnect
    expect(onDisconnect).not.toHaveBeenCalled();
    expect(rt.state.status).toBe('open');

    await rt.disconnect();
  });

  it('refreshAuth rejects and keeps old socket if new socket fails to open', async () => {
    server.removeAllListeners('connection');
    server.on('connection', () => {});

    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
    });
    await rt.connect();
    expect(rt.state.status).toBe('open');

    // Point at a port nothing's listening on for the refresh
    rt['urlBuilder'] = new (await import('./url')).RealtimeUrlBuilder('http://localhost:1');
    await expect(rt.refreshAuth()).rejects.toThrow();
    // Old transport unchanged
    expect(rt.state.status).toBe('open');

    await rt.disconnect();
  });

  it('fires heartbeat pings while open', async () => {
    server.removeAllListeners('connection');
    let pings = 0;
    server.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'ping') {
          pings++;
          ws.send(JSON.stringify({ type: 'pong', ts: Date.now() }));
        }
      });
    });

    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      heartbeat: { intervalMs: 100, timeoutMs: 200 },
    });
    await rt.connect();
    await new Promise((r) => setTimeout(r, 350));
    expect(pings).toBeGreaterThanOrEqual(2);
    await rt.disconnect();
  });

  it('extends heartbeat interval when document.visibilityState becomes hidden (browser only)', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const m = JSON.parse(raw.toString());
        if (m.type === 'ping') ws.send(JSON.stringify({ type: 'pong', ts: 0 }));
      });
    });

    // Stub document and dispatchEvent for this test (Node test env)
    const visibility = { state: 'visible' as 'visible' | 'hidden', listeners: new Set<() => void>() };
    vi.stubGlobal('document', {
      get visibilityState() { return visibility.state; },
      addEventListener: (type: string, cb: () => void) => { if (type === 'visibilitychange') visibility.listeners.add(cb); },
      removeEventListener: (type: string, cb: () => void) => { if (type === 'visibilitychange') visibility.listeners.delete(cb); },
    });

    const rt = new RealtimeClient({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      heartbeat: { intervalMs: 1_000, timeoutMs: 500 } as any,
    });
    // Detection of "browser-like" runtime is gated on the global; force enable for this test.
    (rt as any).visibilityIntegrationEnabled = true;
    await rt.connect();

    // Spy on heartbeat.setIntervalMs
    const setIntervalSpy = vi.spyOn((rt as any).heartbeat, 'setIntervalMs');

    // simulate visibility hidden
    visibility.state = 'hidden';
    for (const cb of visibility.listeners) cb();
    expect(setIntervalSpy).toHaveBeenCalledWith(60_000);
    expect((rt as any).heartbeatCfg.intervalMs).toBe(1_000); // base unchanged

    visibility.state = 'visible';
    for (const cb of visibility.listeners) cb();
    expect(setIntervalSpy).toHaveBeenCalledWith(1_000);

    await rt.disconnect();
    vi.unstubAllGlobals();
  });
});
