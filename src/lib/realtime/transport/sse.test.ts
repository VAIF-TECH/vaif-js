import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import express, { type Express } from 'express';
import type { Server } from 'http';
import { SSETransport } from './sse';

describe('SSETransport', () => {
  let server: Server;
  let port: number;
  let postedMessages: any[] = [];
  let app: Express;
  let pushFn: ((data: any) => void) | null = null;
  let pushRawFn: ((raw: string) => void) | null = null;

  beforeAll(async () => {
    app = express();
    app.use(express.json());

    app.get('/realtime/sse', (_req, res) => {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.flushHeaders();
      pushFn = (data: any) => res.write(`data: ${JSON.stringify(data)}\n\n`);
      pushRawFn = (raw: string) => res.write(`data: ${raw}\n\n`);
      // initial subscribed event
      setTimeout(() => pushFn?.({ type: 'subscribed', channel: 'room:1' }), 30);
    });

    app.post('/realtime/send', (req, res) => {
      postedMessages.push(req.body);
      res.json({ ok: true });
    });

    server = app.listen(0);
    await new Promise<void>((r) => server.on('listening', () => r()));
    port = (server.address() as { port: number }).port;
  });

  afterAll(() => new Promise<void>((resolve) => server.close(() => resolve())));

  it('opens SSE and receives server pushes', async () => {
    postedMessages = [];
    const t = new SSETransport();
    const received: any[] = [];
    t.onMessage((m) => received.push(m));

    await t.open(`http://localhost:${port}/realtime/sse`, {});
    await new Promise((r) => setTimeout(r, 200));
    expect(received).toContainEqual({ type: 'subscribed', channel: 'room:1' });
    t.close();
  });

  it('sends client messages via POST', async () => {
    postedMessages = [];
    const t = new SSETransport({ sendUrl: `http://localhost:${port}/realtime/send` });
    await t.open(`http://localhost:${port}/realtime/sse`, {});
    await new Promise((r) => setTimeout(r, 100));
    await t.send({ type: 'subscribe', channel: 'room:1' });
    expect(postedMessages).toContainEqual({ type: 'subscribe', channel: 'room:1' });
    t.close();
  });

  it('derives sendUrl from openUrl by replacing /sse with /send', async () => {
    postedMessages = [];
    const t = new SSETransport(); // no explicit sendUrl
    await t.open(`http://localhost:${port}/realtime/sse`, {});
    await new Promise((r) => setTimeout(r, 100));
    await t.send({ type: 'ping' });
    expect(postedMessages).toContainEqual({ type: 'ping' });
    t.close();
  });

  it('fans out onMessage to multiple handlers', async () => {
    postedMessages = [];
    const t = new SSETransport();
    const a = vi.fn();
    const b = vi.fn();
    t.onMessage(a);
    t.onMessage(b);

    await t.open(`http://localhost:${port}/realtime/sse`, {});
    await new Promise((r) => setTimeout(r, 200));
    expect(a).toHaveBeenCalled();
    expect(b).toHaveBeenCalled();
    t.close();
  });

  it('fires onError for invalid JSON / schema mismatch', async () => {
    postedMessages = [];
    const t = new SSETransport();
    const errors: Error[] = [];
    t.onError((e) => errors.push(e));
    await t.open(`http://localhost:${port}/realtime/sse`, {});
    await new Promise((r) => setTimeout(r, 50));
    pushRawFn?.('not-json'); // invalid JSON via raw write
    pushFn?.({ type: 'unknown_type' }); // schema mismatch
    await new Promise((r) => setTimeout(r, 200));
    expect(errors.length).toBeGreaterThan(0);
    t.close();
  });

  it('send rejects if not opened', async () => {
    const t = new SSETransport({ sendUrl: `http://localhost:${port}/realtime/send` });
    await expect(t.send({ type: 'ping' })).rejects.toThrow();
  });

  it('close is idempotent', async () => {
    const t = new SSETransport();
    await t.open(`http://localhost:${port}/realtime/sse`, {});
    t.close();
    expect(() => t.close()).not.toThrow();
  });
});
