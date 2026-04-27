import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { WebSocketServer } from 'ws';
import { Realtime } from '../src/lib/realtime';

describe('Realtime e2e — public API contract', () => {
  let server: WebSocketServer;
  let port: number;

  beforeAll(async () => {
    server = new WebSocketServer({ port: 0 });
    await new Promise<void>((r) => server.on('listening', () => r()));
    port = (server.address() as { port: number }).port;
  });

  afterAll(() => new Promise<void>((r) => server.close(() => r())));

  it('5-line hello: connect, subscribe, receive broadcast', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const m = JSON.parse(raw.toString());
        if (m.type === 'subscribe') {
          ws.send(JSON.stringify({ type: 'subscribed', channel: m.channel }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              type: 'broadcast',
              channel: m.channel,
              event: 'hello',
              payload: { greeting: 'world' },
            }));
          }, 30);
        }
      });
    });

    const rt = new Realtime({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
    });
    await rt.connect();
    const ch = rt.channel('room:1');
    let received: any = null;
    ch.on('broadcast', { event: 'hello' }, (p) => { received = p; });
    await ch.subscribe();
    await new Promise((r) => setTimeout(r, 100));

    expect(received).toEqual({ greeting: 'world' });
    await rt.disconnect();
  });

  it('telemetry hooks fire across the connection lifecycle', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const m = JSON.parse(raw.toString());
        if (m.type === 'subscribe') ws.send(JSON.stringify({ type: 'subscribed', channel: m.channel }));
      });
    });

    const onConnect = vi.fn();
    const onDisconnect = vi.fn();
    const onMessageSent = vi.fn();
    const onMessageReceived = vi.fn();
    const onSubscribed = vi.fn();

    const rt = new Realtime({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
      onConnect, onDisconnect, onMessageSent, onMessageReceived, onSubscribed,
    });
    await rt.connect();
    expect(onConnect).toHaveBeenCalled();

    const ch = rt.channel('room:t');
    await ch.subscribe();
    await new Promise((r) => setTimeout(r, 50));

    expect(onMessageSent).toHaveBeenCalled(); // subscribe message went out
    expect(onMessageReceived).toHaveBeenCalled(); // subscribed ack came in

    await rt.disconnect();
    await new Promise((r) => setTimeout(r, 50));
    expect(onDisconnect).toHaveBeenCalled();
  });

  it('user handler throwing does not crash the connection', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const m = JSON.parse(raw.toString());
        if (m.type === 'subscribe') {
          ws.send(JSON.stringify({ type: 'subscribed', channel: m.channel }));
          setTimeout(() => {
            ws.send(JSON.stringify({ type: 'broadcast', channel: m.channel, event: 'a', payload: { i: 1 } }));
            ws.send(JSON.stringify({ type: 'broadcast', channel: m.channel, event: 'a', payload: { i: 2 } }));
          }, 30);
        }
      });
    });

    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const rt = new Realtime({
      client: { baseUrl: `http://localhost:${port}`, getAuthToken: async () => 'tok' },
      transport: 'websocket',
    });
    await rt.connect();
    const ch = rt.channel('room:throw');

    let count = 0;
    let firstThrew = false;
    ch.on('broadcast', { event: 'a' }, () => {
      count++;
      if (count === 1) { firstThrew = true; throw new Error('handler threw'); }
    });
    await ch.subscribe();
    await new Promise((r) => setTimeout(r, 100));

    expect(firstThrew).toBe(true);
    expect(count).toBeGreaterThanOrEqual(2); // second message still dispatched

    await rt.disconnect();
    errSpy.mockRestore();
  });
});
