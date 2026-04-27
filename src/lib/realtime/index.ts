/**
 * Public API for `@vaif/client/realtime`.
 *
 * Usage:
 * ```ts
 * import { Realtime } from '@vaif/client/realtime';
 *
 * const rt = new Realtime({ client: vaif });
 * await rt.connect();
 * const channel = rt.channel('room:123');
 * channel.on('broadcast', { event: 'hello' }, (p) => console.log(p));
 * await channel.subscribe();
 * ```
 */

// Primary export — alias the orchestrator class as `Realtime` for cleaner DX.
export { RealtimeClient as Realtime } from './client';

// Channel class is exported for type annotations even though instances come from realtime.channel(name).
export { Channel } from './channel';

// Public configuration + payload types
export type {
  ConnectionState,
  RealtimeConfig,
  RealtimeClientHost,
  ReconnectConfig,
  HeartbeatConfig,
  OutgoingQueueConfig,
  PostgresChangesPayload,
  PostgresChangesFilter,
  BroadcastPayload,
  BroadcastFilter,
  PresenceMeta,
  PresenceState,
  PresenceFilter,
  SubscribeStatus,
} from './types';

// Encryption hook (interface only in v0.3; users plug in their own implementation)
export type { MessageCipher } from './cipher';
export { NoopCipher } from './cipher';

// Error classes
export {
  RealtimeError,
  ConnectionError,
  SubscriptionError,
  ProtocolError,
} from './errors';
