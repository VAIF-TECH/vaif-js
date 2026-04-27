import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { WebSocketServer } from 'ws';
import { WSTransport } from './websocket';

describe('WSTransport', () => {
  let server: WebSocketServer;
  let port: number;

  beforeAll(async () => {
    server = new WebSocketServer({ port: 0 });
    await new Promise<void>((resolve) => server.on('listening', resolve));
    port = (server.address() as { port: number }).port;
  });

  afterAll(() => new Promise<void>((resolve) => server.close(() => resolve())));

  it('opens, sends, receives, closes cleanly', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'subscribe') {
          ws.send(JSON.stringify({ type: 'subscribed', channel: msg.channel }));
        }
      });
    });

    const t = new WSTransport();
    const received: any[] = [];
    t.onMessage((m) => received.push(m));

    await t.open(`ws://localhost:${port}`, {});
    await t.send({ type: 'subscribe', channel: 'room:1' });
    await new Promise((r) => setTimeout(r, 100));
    expect(received).toContainEqual({ type: 'subscribed', channel: 'room:1' });
    t.close();
  });

  it('fans out onMessage to multiple handlers', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      setTimeout(() => ws.send(JSON.stringify({ type: 'pong', ts: 42 })), 30);
    });

    const t = new WSTransport();
    const a = vi.fn();
    const b = vi.fn();
    t.onMessage(a);
    t.onMessage(b);

    await t.open(`ws://localhost:${port}`, {});
    await new Promise((r) => setTimeout(r, 100));
    expect(a).toHaveBeenCalledWith({ type: 'pong', ts: 42 });
    expect(b).toHaveBeenCalledWith({ type: 'pong', ts: 42 });
    t.close();
  });

  it('fires onClose with code and reason on server-initiated close', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      setTimeout(() => ws.close(1011, 'server error'), 30);
    });

    const t = new WSTransport();
    const closeFn = vi.fn();
    t.onClose(closeFn);

    await t.open(`ws://localhost:${port}`, {});
    await new Promise((r) => setTimeout(r, 200));
    expect(closeFn).toHaveBeenCalledWith(expect.objectContaining({ code: 1011, reason: 'server error' }));
  });

  it('rejects open() when connection fails', async () => {
    const t = new WSTransport();
    await expect(t.open('ws://localhost:1', {})).rejects.toThrow();
  });

  it('send throws when not open', async () => {
    const t = new WSTransport();
    await expect(t.send({ type: 'ping' })).rejects.toThrow();
  });

  it('drops invalid JSON server messages without crashing', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.send('not-json');
      setTimeout(() => ws.send(JSON.stringify({ type: 'pong' })), 30);
    });

    const t = new WSTransport();
    const onError = vi.fn();
    const onMessage = vi.fn();
    t.onError(onError); // optional hook on the transport
    t.onMessage(onMessage);

    await t.open(`ws://localhost:${port}`, {});
    await new Promise((r) => setTimeout(r, 100));
    // Valid pong still got through
    expect(onMessage).toHaveBeenCalledWith({ type: 'pong' });
    t.close();
  });

  it('drops messages that fail schema validation without crashing', async () => {
    server.removeAllListeners('connection');
    server.on('connection', (ws) => {
      ws.send(JSON.stringify({ type: 'unknown_type' })); // not in ServerMessageSchema
      setTimeout(() => ws.send(JSON.stringify({ type: 'pong' })), 30);
    });

    const t = new WSTransport();
    const onMessage = vi.fn();
    t.onMessage(onMessage);

    await t.open(`ws://localhost:${port}`, {});
    await new Promise((r) => setTimeout(r, 100));
    expect(onMessage).toHaveBeenCalledWith({ type: 'pong' });
    expect(onMessage).not.toHaveBeenCalledWith(expect.objectContaining({ type: 'unknown_type' }));
    t.close();
  });

  it('close is idempotent', async () => {
    server.removeAllListeners('connection');
    server.on('connection', () => {});

    const t = new WSTransport();
    await t.open(`ws://localhost:${port}`, {});
    t.close();
    expect(() => t.close()).not.toThrow();
  });
});
