import type { Transport, TransportCapabilities, CloseInfo } from './index';
import type { ClientMessage, ServerMessage } from '../protocol';
import { ServerMessageSchema } from '../protocol';
import { detectRuntime } from '../runtime';

type WSLike = {
  send(data: string): void;
  close(code?: number, reason?: string): void;
  readyState: number;
  addEventListener(type: 'open' | 'message' | 'close' | 'error', cb: (e: any) => void): void;
};

type WSConstructor = new (url: string, opts?: any) => WSLike;

let _wsCtor: WSConstructor | null = null;

async function getWebSocketImpl(): Promise<WSConstructor> {
  if (_wsCtor) return _wsCtor;
  const rt = detectRuntime();
  if (rt === 'node') {
    const mod = await import('ws');
    _wsCtor = (mod.WebSocket ?? (mod as any).default) as unknown as WSConstructor;
  } else {
    const browserWS = (globalThis as { WebSocket?: WSConstructor }).WebSocket;
    if (!browserWS) {
      throw new Error('No WebSocket implementation available in this runtime');
    }
    _wsCtor = browserWS;
  }
  return _wsCtor;
}

export class WSTransport implements Transport {
  capabilities: TransportCapabilities = {
    bidirectional: true,
    binarySupport: false, // JSON-only over WS for v0.3; binary frames are future work
    serverPush: true,
  };

  private ws: WSLike | null = null;
  private messageHandlers: Array<(m: ServerMessage) => void> = [];
  private closeHandlers: Array<(i: CloseInfo) => void> = [];
  private errorHandlers: Array<(err: Error) => void> = [];
  private closed = false;
  private closeFired = false;

  /** Register a non-fatal error handler (bad JSON, schema mismatch, handler throws). */
  onError(cb: (err: Error) => void): void {
    this.errorHandlers.push(cb);
  }

  private fireError(err: unknown): void {
    const e = err instanceof Error ? err : new Error(String(err));
    for (const h of this.errorHandlers) {
      try {
        h(e);
      } catch {
        /* swallow nested errors */
      }
    }
  }

  async open(url: string, headers: Record<string, string>): Promise<void> {
    const WS = await getWebSocketImpl();
    const isNode = detectRuntime() === 'node';
    const ws = isNode ? new WS(url, { headers } as any) : new WS(url);
    this.ws = ws;

    return new Promise<void>((resolve, reject) => {
      let resolved = false;

      ws.addEventListener('open', () => {
        resolved = true;
        resolve();
      });

      ws.addEventListener('error', (e: any) => {
        if (!resolved) {
          reject(new Error(e?.message ?? 'websocket error'));
        }
      });

      ws.addEventListener('close', (e: any) => {
        if (this.closeFired) return;
        this.closeFired = true;
        this.closed = true;
        const info: CloseInfo = {
          code: typeof e?.code === 'number' ? e.code : 1006,
          reason: typeof e?.reason === 'string' ? e.reason : '',
        };
        if (!resolved) {
          resolved = true;
          reject(new Error(`websocket closed before open (code=${info.code})`));
        }
        for (const h of this.closeHandlers) {
          try {
            h(info);
          } catch (err) {
            this.fireError(err);
          }
        }
      });

      ws.addEventListener('message', (e: any) => {
        const text =
          typeof e.data === 'string' ? e.data : (e.data as { toString?: () => string }).toString?.();
        if (typeof text !== 'string') {
          this.fireError(new Error('non-string message data'));
          return;
        }
        let parsed: unknown;
        try {
          parsed = JSON.parse(text);
        } catch (err) {
          this.fireError(new Error(`invalid JSON: ${(err as Error).message}`));
          return;
        }
        const result = ServerMessageSchema.safeParse(parsed);
        if (!result.success) {
          this.fireError(new Error(`schema mismatch: ${result.error.message}`));
          return;
        }
        for (const h of this.messageHandlers) {
          try {
            h(result.data);
          } catch (err) {
            this.fireError(err);
          }
        }
      });
    });
  }

  async send(msg: ClientMessage): Promise<void> {
    if (!this.ws || this.ws.readyState !== 1) {
      throw new Error('socket not open');
    }
    this.ws.send(JSON.stringify(msg));
  }

  close(code?: number, reason?: string): void {
    if (this.closed || !this.ws) return;
    if (this.ws.readyState <= 1) {
      this.ws.close(code, reason);
    }
  }

  onMessage(cb: (m: ServerMessage) => void): void {
    this.messageHandlers.push(cb);
  }

  onClose(cb: (i: CloseInfo) => void): void {
    this.closeHandlers.push(cb);
  }
}

/** @internal — for tests to reset cached constructor. */
export function _resetWSCtor(): void {
  _wsCtor = null;
}
