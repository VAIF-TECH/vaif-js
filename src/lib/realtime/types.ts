import type { ServerMessage, ClientMessage } from './protocol';
import type { MessageCipher } from './cipher';

export type ConnectionState =
  | { status: 'idle' }
  | { status: 'connecting'; attempt: number }
  | { status: 'open'; transport: 'websocket' | 'sse' }
  | { status: 'reconnecting'; attempt: number; lastError?: Error }
  | { status: 'backing-off'; attempt: number; nextDelayMs: number }
  | { status: 'closed'; reason: string };

export type SubscribeStatus = 'SUBSCRIBED' | 'CHANNEL_ERROR' | 'TIMED_OUT' | 'CLOSED';

export type PostgresChangesPayload<T = Record<string, unknown>> = {
  type: 'postgres_changes';
  schema: string;
  table: string;
  op: 'INSERT' | 'UPDATE' | 'DELETE';
  record?: T;
  old_record?: T;
  commit_timestamp: string;
};

export type BroadcastPayload<T = Record<string, unknown>> = T;

export type PresenceMeta = Record<string, unknown>;
export type PresenceState = Record<string, PresenceMeta[]>;

export type PostgresChangesFilter = {
  event: 'INSERT' | 'UPDATE' | 'DELETE' | '*';
  table: string;
  schema?: string;
  filter?: string;
};

export type BroadcastFilter = { event: string };

export type PresenceFilter = { event: 'sync' | 'join' | 'leave' };

export type ReconnectConfig = {
  enabled?: boolean;
  initialDelayMs?: number;
  maxDelayMs?: number;
  maxAttempts?: number;
  jitter?: number;
};

export type HeartbeatConfig = {
  intervalMs?: number;
  timeoutMs?: number;
};

export type OutgoingQueueConfig = {
  maxSize?: number;
  onDrop?: 'oldest' | 'newest' | 'reject';
};

/**
 * Minimal client interface the realtime layer needs from the host SDK.
 * Allows decoupling from the full Stainless-generated VaifClient class.
 */
export type RealtimeClientHost = {
  apiKey?: string;
  baseUrl?: string;
  getAuthToken?(): Promise<string>;
};

export type RealtimeConfig = {
  client: RealtimeClientHost;

  transport?: 'auto' | 'websocket' | 'sse';

  reconnect?: ReconnectConfig;
  heartbeat?: HeartbeatConfig;
  outgoingQueue?: OutgoingQueueConfig;
  cipher?: MessageCipher;

  // Telemetry hooks — all optional
  onConnect?(info: { transport: 'websocket' | 'sse'; url: string; latencyMs: number }): void;
  onDisconnect?(info: { code: number; reason: string; durationMs: number }): void;
  onReconnect?(info: { attempt: number; lastError?: Error; nextDelayMs: number }): void;
  onTransportFallback?(info: { from: 'websocket'; to: 'sse'; reason: string }): void;
  onConnectionGap?(info: { durationMs: number; missedMessageEstimate?: number }): void;
  onMessageSent?(msg: ClientMessage): void;
  onMessageReceived?(msg: ServerMessage): void;
  onMessageDropped?(info: { msg: ClientMessage; reason: 'queue_full' | 'rate_limit' }): void;
  onSubscribed?(channel: string, ackLatencyMs: number): void;
  onSubscriptionError?(channel: string, error: Error): void;
  onError?(err: Error): void;
};
