/**
 * Scriptable WebSocket mock server for integration tests.
 *
 * Lets each test attach handlers/scripts to drive the realtime SDK against
 * deterministic server behavior. Built on top of `ws`'s `WebSocketServer`.
 *
 * Usage:
 *   const server = await MockServer.start();
 *   server.onConnection((ws) => { ... });
 *   const client = new Realtime({ client: { baseUrl: server.baseUrl, ... }});
 *   ...
 *   await server.stop();
 */
import type { IncomingMessage } from 'http';
import { WebSocketServer, WebSocket as NodeWebSocket } from 'ws';

export type ClientPayload = Record<string, unknown> & { type: string; channel?: string };

export type MockConnection = {
  ws: NodeWebSocket;
  /** Original HTTP upgrade request — useful for asserting ?token=... */
  request: IncomingMessage;
  /** Convenience: parsed token from the upgrade URL's `token` query param. */
  token: string | null;
  /** Send a JSON-stringified message to this client. */
  send(msg: Record<string, unknown>): void;
  /**
   * Close the connection. Default does a graceful close with code 1011
   * (server error). To simulate an abrupt drop (TCP RST), pass `abrupt: true`.
   */
  close(code?: number, reason?: string): void;
  /** Abrupt close — drops the TCP connection without a close frame. */
  drop(): void;
  /** Stop reading further messages but keep the socket open (used for backpressure tests). */
  stall(): void;
  unstall(): void;
};

type ConnectionHandler = (conn: MockConnection, firstMessage: ClientPayload | null) => void;
type MessageHandler = (conn: MockConnection, msg: ClientPayload) => void;

export class MockServer {
  private wss: WebSocketServer;
  private connHandlers: ConnectionHandler[] = [];
  private msgHandlers: MessageHandler[] = [];
  /** Per-connection metadata (stalled flag etc). */
  private state = new WeakMap<NodeWebSocket, { stalled: boolean; pending: ClientPayload[] }>();

  readonly port: number;

  private constructor(wss: WebSocketServer, port: number) {
    this.wss = wss;
    this.port = port;
    this.wss.on('connection', (ws, req) => this.handleConnection(ws, req));
  }

  static async start(): Promise<MockServer> {
    const wss = new WebSocketServer({ port: 0 });
    await new Promise<void>((r) => wss.on('listening', () => r()));
    const port = (wss.address() as { port: number }).port;
    return new MockServer(wss, port);
  }

  get baseUrl(): string {
    return `http://localhost:${this.port}`;
  }

  /** Register a handler invoked for each new connection. */
  onConnection(cb: ConnectionHandler): void {
    this.connHandlers.push(cb);
  }

  /** Register a handler invoked for each incoming client message. */
  onMessage(cb: MessageHandler): void {
    this.msgHandlers.push(cb);
  }

  /**
   * Convenience: auto-ack every `subscribe` with `subscribed`. Useful default
   * behavior shared by most tests.
   */
  autoAckSubscribe(): void {
    this.onMessage((conn, msg) => {
      if (msg.type === 'subscribe' && typeof msg.channel === 'string') {
        conn.send({ type: 'subscribed', channel: msg.channel });
      }
    });
  }

  /** Reset all registered handlers (between tests on a shared server). */
  reset(): void {
    this.connHandlers = [];
    this.msgHandlers = [];
  }

  /** Number of currently open connections. */
  connectionCount(): number {
    return this.wss.clients.size;
  }

  /** Forcefully close all connected clients. */
  closeAll(code = 1011, reason = 'mock close all'): void {
    for (const ws of this.wss.clients) {
      try {
        ws.close(code, reason);
      } catch {
        /* ignore */
      }
    }
  }

  /** Abruptly drop all connected clients (TCP-level RST). */
  dropAll(): void {
    for (const ws of this.wss.clients) {
      try {
        (ws as { terminate?: () => void }).terminate?.();
      } catch {
        /* ignore */
      }
    }
  }

  async stop(): Promise<void> {
    // Force-terminate any lingering clients so wss.close() can return promptly
    // — `wss.close` waits for in-flight clients to finish their close
    // handshake, which can stall if the SDK never sends a close frame
    // (e.g. after refreshAuth's silent swap of the old socket).
    this.dropAll();
    return new Promise<void>((r) => this.wss.close(() => r()));
  }

  private handleConnection(ws: NodeWebSocket, request: IncomingMessage): void {
    const state = { stalled: false, pending: [] as ClientPayload[] };
    this.state.set(ws, state);

    let token: string | null = null;
    try {
      const u = new URL(request.url ?? '/', `http://localhost:${this.port}`);
      token = u.searchParams.get('token');
    } catch {
      /* ignore */
    }

    const conn: MockConnection = {
      ws,
      request,
      token,
      send: (msg) => {
        try {
          ws.send(JSON.stringify(msg));
        } catch {
          /* ignore */
        }
      },
      close: (code = 1011, reason = 'mock close') => {
        try {
          ws.close(code, reason);
        } catch {
          /* ignore */
        }
      },
      drop: () => {
        // `ws.close(1006)` is rejected by the `ws` library because 1006 is a
        // reserved code clients/servers cannot send. Use `terminate()` to
        // simulate an abrupt TCP-level drop — the client side observes a
        // close event with code 1006.
        try {
          (ws as { terminate?: () => void }).terminate?.();
        } catch {
          /* ignore */
        }
      },
      stall: () => {
        state.stalled = true;
      },
      unstall: () => {
        state.stalled = false;
        // Replay pending messages through the registered handlers.
        const pending = state.pending.splice(0);
        for (const msg of pending) this.dispatchMessage(conn, msg);
      },
    };

    let firstMessage: ClientPayload | null = null;

    ws.on('message', (raw) => {
      let msg: ClientPayload;
      try {
        msg = JSON.parse(raw.toString());
      } catch {
        return;
      }
      if (firstMessage === null) firstMessage = msg;
      if (state.stalled) {
        state.pending.push(msg);
        return;
      }
      this.dispatchMessage(conn, msg);
    });

    // Synchronously notify connection handlers so they can register message
    // listeners *before* the first message arrives.
    for (const cb of this.connHandlers) {
      try {
        cb(conn, firstMessage);
      } catch (err) {
        // Surface handler bugs.
        // eslint-disable-next-line no-console
        console.error('[mock-server] connection handler threw:', err);
      }
    }
  }

  private dispatchMessage(conn: MockConnection, msg: ClientPayload): void {
    for (const cb of this.msgHandlers) {
      try {
        cb(conn, msg);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[mock-server] message handler threw:', err);
      }
    }
  }
}
