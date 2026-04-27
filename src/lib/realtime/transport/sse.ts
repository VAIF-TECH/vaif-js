import type { Transport, TransportCapabilities, CloseInfo } from './index';
import type { ClientMessage, ServerMessage } from '../protocol';
import { ServerMessageSchema } from '../protocol';
import { detectRuntime } from '../runtime';

export type SSETransportOptions = {
  /** Override the URL used for client→server `send`. Defaults to derived: replace `/sse` with `/send` in openUrl. */
  sendUrl?: string;
};

type EventSourceLike = {
  readonly readyState: number; // 0 CONNECTING, 1 OPEN, 2 CLOSED
  close(): void;
  onopen: ((e: any) => void) | null;
  onerror: ((e: any) => void) | null;
  onmessage: ((e: { data: string }) => void) | null;
};

type EventSourceConstructor = new (
  url: string,
  init?: { headers?: Record<string, string> },
) => EventSourceLike;

let _esCtor: EventSourceConstructor | null = null;

async function getEventSourceImpl(): Promise<EventSourceConstructor> {
  if (_esCtor) return _esCtor;
  const rt = detectRuntime();
  const browserES = (globalThis as unknown as { EventSource?: EventSourceConstructor }).EventSource;
  if (browserES) {
    _esCtor = browserES;
    return _esCtor;
  }
  if (rt === 'node') {
    const mod = await import('eventsource');
    _esCtor = ((mod as any).EventSource ?? (mod as any).default) as EventSourceConstructor;
    return _esCtor;
  }
  throw new Error('No EventSource implementation available in this runtime');
}

export class SSETransport implements Transport {
  capabilities: TransportCapabilities = {
    bidirectional: false,
    binarySupport: false,
    serverPush: true,
  };

  private es: EventSourceLike | null = null;
  private openUrl: string | null = null;
  private sendUrl: string | null = null;
  private headers: Record<string, string> = {};
  private opts: SSETransportOptions;

  private messageHandlers: Array<(m: ServerMessage) => void> = [];
  private closeHandlers: Array<(i: CloseInfo) => void> = [];
  private errorHandlers: Array<(err: Error) => void> = [];

  private closeFired = false;
  private closed = false;

  constructor(opts: SSETransportOptions = {}) {
    this.opts = opts;
  }

  /**
   * Opens the SSE connection.
   *
   * **Browser caveat**: native `EventSource` constructors ignore the `init.headers`
   * argument, so any headers you pass here are only respected by the Node
   * `eventsource` polyfill. For browser auth, prefer cookies (same-origin) or
   * embed a short-lived token in the URL query string (`?token=...`).
   */
  async open(url: string, headers: Record<string, string>): Promise<void> {
    const ES = await getEventSourceImpl();
    this.openUrl = url;
    this.sendUrl = this.opts.sendUrl ?? this.deriveSendUrl(url);
    this.headers = headers;

    return new Promise<void>((resolve, reject) => {
      let resolved = false;
      const es = new ES(url, { headers });
      this.es = es;

      es.onopen = () => {
        resolved = true;
        resolve();
      };

      es.onerror = (e: any) => {
        // EventSource auto-reconnects on errors when readyState becomes CONNECTING again.
        // We surface the error and only fire close once when readyState reaches CLOSED.
        if (!resolved) {
          reject(new Error(e?.message ?? 'sse open error'));
          return;
        }
        if (es.readyState === 2 /* CLOSED */) {
          this.fireClose({ code: 1006, reason: 'sse closed' });
        } else {
          this.fireError(new Error(e?.message ?? 'sse error'));
        }
      };

      es.onmessage = (e: { data: string }) => {
        let parsed: unknown;
        try {
          parsed = JSON.parse(e.data);
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
      };
    });
  }

  async send(msg: ClientMessage, opts: { signal?: AbortSignal; timeoutMs?: number } = {}): Promise<void> {
    if (!this.sendUrl || this.closed) {
      throw new Error('transport not open');
    }
    const timeoutMs = opts.timeoutMs ?? 15_000;
    const ctrl = new AbortController();
    const timeoutId = setTimeout(() => ctrl.abort(new Error(`send timeout after ${timeoutMs}ms`)), timeoutMs);
    // Compose with caller-supplied signal if present.
    if (opts.signal) {
      if (opts.signal.aborted) ctrl.abort(opts.signal.reason);
      else opts.signal.addEventListener('abort', () => ctrl.abort(opts.signal!.reason), { once: true });
    }

    try {
      const res = await fetch(this.sendUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...this.headers },
        body: JSON.stringify(msg),
        signal: ctrl.signal,
      });
      if (!res.ok) {
        let bodyHint = '';
        try {
          const text = await res.text();
          bodyHint = text.length > 200 ? `: ${text.slice(0, 200)}…` : text ? `: ${text}` : '';
        } catch { /* ignore body read failures */ }
        throw new Error(`SSE send failed: ${res.status} ${res.statusText}${bodyHint}`);
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  close(_code?: number, _reason?: string): void {
    if (this.closed || !this.es) return;
    this.closed = true;
    this.es.close();
    this.fireClose({ code: 1000, reason: 'client close' });
  }

  onMessage(cb: (m: ServerMessage) => void): void {
    this.messageHandlers.push(cb);
  }

  onClose(cb: (i: CloseInfo) => void): void {
    this.closeHandlers.push(cb);
  }

  onError(cb: (err: Error) => void): void {
    this.errorHandlers.push(cb);
  }

  private deriveSendUrl(openUrl: string): string {
    return openUrl.replace(/\/sse(?=\?|$)/, '/send');
  }

  private fireClose(info: CloseInfo): void {
    if (this.closeFired) return;
    this.closeFired = true;
    for (const h of this.closeHandlers) {
      try {
        h(info);
      } catch (err) {
        this.fireError(err);
      }
    }
  }

  private fireError(err: unknown): void {
    const e = err instanceof Error ? err : new Error(String(err));
    for (const h of this.errorHandlers) {
      try {
        h(e);
      } catch {
        /* swallow nested */
      }
    }
  }
}

/** @internal — for tests to reset cached constructor. */
export function _resetESCtor(): void {
  _esCtor = null;
}
