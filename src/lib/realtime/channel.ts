import type { ClientMessage, ServerMessage } from './protocol';
import type {
  PostgresChangesFilter,
  BroadcastFilter,
  PresenceFilter,
  PostgresChangesPayload,
  BroadcastPayload,
  PresenceState,
  SubscribeStatus,
} from './types';
import { PresenceTracker } from './presence';

type PostgresHandler = {
  type: 'postgres_changes';
  filter: PostgresChangesFilter;
  cb: (p: PostgresChangesPayload) => void;
};
type BroadcastHandler = {
  type: 'broadcast';
  filter: BroadcastFilter;
  cb: (p: BroadcastPayload) => void;
};
type PresenceHandler = {
  type: 'presence';
  filter: PresenceFilter;
  cb: () => void;
};
type Handler = PostgresHandler | BroadcastHandler | PresenceHandler;

export type ChannelOptions = {
  /** Max time to wait for a `subscribed` ack from the server. Default 10s. */
  subscribeTimeoutMs?: number;
};

/**
 * A single realtime channel. Holds per-channel handlers, presence state,
 * and dispatches incoming server messages to registered callbacks based on
 * filter matching.
 *
 * The Channel does NOT own the transport. It receives incoming messages via
 * `_dispatch(msg)` (called by RealtimeClient) and sends outgoing messages
 * via the `sender` function injected at construction.
 */
export class Channel {
  readonly name: string;
  private handlers: Handler[] = [];
  private presence = new PresenceTracker();
  private send_: (msg: ClientMessage) => Promise<void>;
  private opts: Required<ChannelOptions>;
  private _isSubscribed = false;
  private subscribePromise: { resolve: (s: SubscribeStatus) => void } | null = null;
  private subscribeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    name: string,
    sender: (msg: ClientMessage) => Promise<void>,
    opts: ChannelOptions = {},
  ) {
    this.name = name;
    this.send_ = sender;
    this.opts = { subscribeTimeoutMs: opts.subscribeTimeoutMs ?? 10_000 };
  }

  get isSubscribed(): boolean {
    return this._isSubscribed;
  }

  on(
    eventType: 'postgres_changes',
    filter: PostgresChangesFilter,
    cb: (p: PostgresChangesPayload) => void,
  ): this;
  on(eventType: 'broadcast', filter: BroadcastFilter, cb: (p: BroadcastPayload) => void): this;
  on(eventType: 'presence', filter: PresenceFilter, cb: () => void): this;
  on(
    eventType: 'postgres_changes' | 'broadcast' | 'presence',
    filter: PostgresChangesFilter | BroadcastFilter | PresenceFilter,
    cb: ((p: PostgresChangesPayload) => void) | ((p: BroadcastPayload) => void) | (() => void),
  ): this {
    this.handlers.push({ type: eventType, filter, cb } as Handler);
    return this;
  }

  subscribe(): Promise<SubscribeStatus> {
    return new Promise<SubscribeStatus>((resolve) => {
      this.subscribePromise = { resolve };
      this.subscribeTimer = setTimeout(() => {
        if (this.subscribePromise) {
          const r = this.subscribePromise;
          this.subscribePromise = null;
          this.subscribeTimer = null;
          r.resolve('TIMED_OUT');
        }
      }, this.opts.subscribeTimeoutMs);
      // Fire-and-forget the outgoing subscribe message. If the sender throws
      // asynchronously, fail the subscribe with CHANNEL_ERROR.
      this.send_({ type: 'subscribe', channel: this.name }).catch(() => {
        this.resolveSubscribe('CHANNEL_ERROR');
      });
    });
  }

  async unsubscribe(): Promise<void> {
    await this.send_({ type: 'unsubscribe', channel: this.name });
    this._isSubscribed = false;
  }

  async send(msg: {
    type: 'broadcast';
    event: string;
    payload?: Record<string, unknown>;
  }): Promise<void> {
    if (msg.type !== 'broadcast') throw new Error(`Unsupported send type: ${String(msg.type)}`);
    await this.send_({
      type: 'broadcast',
      channel: this.name,
      event: msg.event,
      ...(msg.payload !== undefined ? { payload: msg.payload } : {}),
    });
  }

  async track(state: Record<string, unknown> = {}): Promise<void> {
    await this.send_({ type: 'presence_track', state });
  }

  async untrack(): Promise<void> {
    await this.send_({ type: 'presence_untrack' });
  }

  presenceState(): PresenceState {
    return this.presence.state();
  }

  /** @internal — called by RealtimeClient on every incoming server message. */
  _dispatch(msg: ServerMessage): void {
    // Filter messages that target a different channel (when the message
    // carries a `channel` field). Some messages (presence_join/leave) do
    // not carry a channel; those are routed by the caller.
    if ('channel' in msg && msg.channel !== undefined && msg.channel !== this.name) {
      return;
    }

    // Handle subscribe/error acks
    if (msg.type === 'subscribed' && msg.channel === this.name) {
      this._isSubscribed = true;
      this.resolveSubscribe('SUBSCRIBED');
      return;
    }
    if (msg.type === 'error' && this.subscribePromise && msg.channel === this.name) {
      this.resolveSubscribe('CHANNEL_ERROR');
      return;
    }

    // Update presence tracker first so handlers see fresh state
    if (msg.type === 'presence_sync') {
      this.presence.handleSync(msg.state);
    } else if (msg.type === 'presence_join') {
      this.presence.handleJoin(msg.key, msg.current, msg.joined);
    } else if (msg.type === 'presence_leave') {
      this.presence.handleLeave(msg.key, msg.current, msg.left);
    }

    // Dispatch to user handlers
    for (const h of this.handlers) {
      try {
        if (h.type === 'postgres_changes' && msg.type === 'db_change') {
          if (this.matchesPostgres(h.filter, msg)) {
            h.cb(this.toPostgresPayload(msg));
          }
        } else if (h.type === 'broadcast' && msg.type === 'broadcast') {
          if (h.filter.event === msg.event) {
            h.cb(msg.payload ?? {});
          }
        } else if (h.type === 'presence') {
          if (
            (h.filter.event === 'sync' && msg.type === 'presence_sync') ||
            (h.filter.event === 'join' && msg.type === 'presence_join') ||
            (h.filter.event === 'leave' && msg.type === 'presence_leave')
          ) {
            h.cb();
          }
        }
      } catch (err) {
        console.error('[realtime/channel] handler threw:', err);
      }
    }
  }

  /** @internal — called by RealtimeClient after a reconnect to resubscribe. */
  _resetSubscription(): void {
    this._isSubscribed = false;
  }

  private resolveSubscribe(status: SubscribeStatus): void {
    if (this.subscribeTimer) {
      clearTimeout(this.subscribeTimer);
      this.subscribeTimer = null;
    }
    if (this.subscribePromise) {
      const r = this.subscribePromise;
      this.subscribePromise = null;
      r.resolve(status);
    }
  }

  private matchesPostgres(
    filter: PostgresChangesFilter,
    msg: Extract<ServerMessage, { type: 'db_change' }>,
  ): boolean {
    if (filter.event !== '*' && filter.event !== msg.op) return false;
    if (filter.table !== msg.table) return false;
    if (filter.schema !== undefined && filter.schema !== msg.schema) return false;
    // filter.filter (PostgREST-style) is a server-side concern; SDK does not
    // re-filter client-side here.
    return true;
  }

  private toPostgresPayload(
    msg: Extract<ServerMessage, { type: 'db_change' }>,
  ): PostgresChangesPayload {
    return {
      type: 'postgres_changes',
      schema: msg.schema,
      table: msg.table,
      op: msg.op,
      ...(msg.record !== undefined ? { record: msg.record } : {}),
      ...(msg.old_record !== undefined ? { old_record: msg.old_record } : {}),
      commit_timestamp: msg.ts,
    };
  }
}
