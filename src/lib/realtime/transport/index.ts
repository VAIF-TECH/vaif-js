import type { ClientMessage, ServerMessage } from '../protocol';
import { WSTransport } from './websocket';
import { SSETransport } from './sse';

export type TransportCapabilities = {
  /** Can the client send messages over the transport? false for SSE (HTTP fallback for sends). */
  bidirectional: boolean;
  /** Can binary frames be sent/received? false for SSE (text only). */
  binarySupport: boolean;
  /** Can the server push events without client polling? true for both WS and SSE. */
  serverPush: boolean;
};

export type CloseInfo = {
  code: number;
  reason: string;
};

/**
 * Transport abstraction over WebSocket / SSE / future protocols.
 * Implementations own the underlying connection and surface server messages
 * via the `onMessage` callback. Sends go through `send`.
 */
export interface Transport {
  /** Open the connection. Resolves on successful handshake; rejects on failure. */
  open(url: string, headers: Record<string, string>): Promise<void>;

  /** Send a single client message. Caller is responsible for ordering/queueing. */
  send(message: ClientMessage): Promise<void>;

  /** Close the connection. Idempotent — safe to call multiple times. */
  close(code?: number, reason?: string): void;

  /** Register a server-message handler. Multiple registrations are fan-out. */
  onMessage(cb: (msg: ServerMessage) => void): void;

  /** Register a close handler. Fires once per close (clean or abnormal). */
  onClose(cb: (info: CloseInfo) => void): void;

  /** Register a non-fatal error handler. Multiple registrations are fan-out. */
  onError(cb: (err: Error) => void): void;

  capabilities: TransportCapabilities;
}

export type TransportKind = 'websocket' | 'sse';

export type TransportOptions = { kind: TransportKind };

export function createTransport(opts: TransportOptions): Transport {
  switch (opts.kind) {
    case 'websocket':
      return new WSTransport();
    case 'sse':
      return new SSETransport();
    default:
      throw new Error(`Unknown transport kind: ${(opts as { kind: string }).kind}`);
  }
}

export type TransportMode = 'auto' | 'websocket' | 'sse';

export type ResolvedTransport = {
  kind: TransportKind;
  /** When auto-selection chose a fallback, the reason the preferred transport failed. */
  reason?: string;
};

type FailureRecord = { kind: TransportKind; reason: string; at: number };

let _failureCache: FailureRecord | null = null;

/**
 * Records that a transport attempt failed in this session. Call after a
 * `Transport.open()` rejection (or other definitive blockage signal) so
 * subsequent `resolveTransport({ mode: 'auto' })` calls can pick the alternative.
 *
 * Currently stores only the most recent failure (single-slot cache).
 */
export function recordTransportFailure(kind: TransportKind, reason: string): void {
  _failureCache = { kind, reason, at: Date.now() };
}

/** @internal — for tests. */
export function _resetTransportCache(): void {
  _failureCache = null;
}

/**
 * Decides which transport to use based on the requested mode and any cached
 * failures from previous attempts in this session.
 *
 * - `mode: 'websocket'` or `'sse'` returns that transport unconditionally
 *   (caller has explicitly opted in).
 * - `mode: 'auto'` prefers websocket. If websocket has previously failed in
 *   this session, falls back to sse and includes the failure reason on the
 *   `reason` field of the result.
 *
 * SSE failures are recorded for telemetry but do not influence auto selection
 * (we have no further fallback to choose).
 */
export async function resolveTransport(opts: { mode: TransportMode }): Promise<ResolvedTransport> {
  switch (opts.mode) {
    case 'websocket':
      return { kind: 'websocket' };
    case 'sse':
      return { kind: 'sse' };
    case 'auto': {
      if (_failureCache?.kind === 'websocket') {
        return { kind: 'sse', reason: _failureCache.reason };
      }
      return { kind: 'websocket' };
    }
    default:
      throw new Error(`Unknown transport mode: ${(opts as { mode: string }).mode}`);
  }
}
