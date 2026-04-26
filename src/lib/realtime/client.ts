import type { Transport } from './transport/index';
import { resolveTransport, createTransport, recordTransportFailure } from './transport/index';
import { ConnectionStateMachine } from './state';
import type { ConnectionState, RealtimeConfig } from './types';
import { Channel } from './channel';
import { OutgoingQueue } from './queue';
import { Heartbeat } from './heartbeat';
import { computeBackoffDelay } from './backoff';
import { RealtimeUrlBuilder } from './url';
import type { ClientMessage, ServerMessage } from './protocol';
import { ConnectionError } from './errors';

type RequiredReconnect = {
  enabled: boolean;
  initialDelayMs: number;
  maxDelayMs: number;
  maxAttempts: number;
  jitter: number;
  backoffMultiplier: number;
};

type RequiredHeartbeat = {
  intervalMs: number;
  timeoutMs: number;
};

type RequiredQueue = {
  maxSize: number;
  onDrop: 'oldest' | 'newest' | 'reject';
};

const DEFAULT_RECONNECT: RequiredReconnect = {
  enabled: true,
  initialDelayMs: 1_000,
  maxDelayMs: 30_000,
  maxAttempts: Infinity,
  jitter: 0.3,
  backoffMultiplier: 2,
};

const DEFAULT_HEARTBEAT: RequiredHeartbeat = {
  intervalMs: 30_000,
  timeoutMs: 10_000,
};

const DEFAULT_QUEUE: RequiredQueue = {
  maxSize: 100,
  onDrop: 'oldest',
};

/**
 * RealtimeClient orchestrates a single transport connection (WebSocket or SSE)
 * and a registry of `Channel` instances that share that connection.
 *
 * Lifecycle:
 *   - `connect()` resolves the transport, fetches an auth token, and opens the socket.
 *   - On `dropped` (server close, heartbeat timeout), schedules a reconnect via
 *     `computeBackoffDelay` and `setTimeout`.
 *   - On a successful re-open, all registered channels are reset and resubscribed.
 *   - `disconnect()` cancels any pending reconnect, stops the heartbeat, and closes.
 */
export class RealtimeClient {
  private cfg: RealtimeConfig;
  private fsm = new ConnectionStateMachine();
  private channels = new Map<string, Channel>();
  private transport: Transport | null = null;
  private queue: OutgoingQueue<ClientMessage>;
  private heartbeat: Heartbeat;
  private urlBuilder: RealtimeUrlBuilder;
  private reconnectCfg: RequiredReconnect;
  private heartbeatCfg: RequiredHeartbeat;
  private connectStartedAt = 0;
  private openedAt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private intentionalClose = false;
  private suppressDisconnect = false;

  constructor(cfg: RealtimeConfig) {
    this.cfg = cfg;
    if (!cfg.client.baseUrl) {
      throw new Error('RealtimeConfig.client.baseUrl is required');
    }
    this.urlBuilder = new RealtimeUrlBuilder(cfg.client.baseUrl);
    this.reconnectCfg = { ...DEFAULT_RECONNECT, ...(cfg.reconnect ?? {}) };
    this.heartbeatCfg = { ...DEFAULT_HEARTBEAT, ...(cfg.heartbeat ?? {}) };
    const queueCfg: RequiredQueue = { ...DEFAULT_QUEUE, ...(cfg.outgoingQueue ?? {}) };
    this.queue = new OutgoingQueue<ClientMessage>({
      maxSize: queueCfg.maxSize,
      dropPolicy: queueCfg.onDrop,
      onDrop: (msg, reason) => this.cfg.onMessageDropped?.({ msg, reason }),
    });
    this.heartbeat = new Heartbeat({
      intervalMs: this.heartbeatCfg.intervalMs,
      timeoutMs: this.heartbeatCfg.timeoutMs,
      onPing: () => {
        void this.sendDirect({ type: 'ping', ts: Date.now() });
      },
      onTimeout: () => this.handleDropped(new Error('heartbeat timeout')),
    });
  }

  get state(): ConnectionState {
    return this.fsm.state;
  }

  onConnectionStateChange(cb: (s: ConnectionState) => void): void {
    this.fsm.onChange(cb);
  }

  channel(name: string): Channel {
    let ch = this.channels.get(name);
    if (!ch) {
      ch = new Channel(name, (msg) => this.send(msg));
      this.channels.set(name, ch);
    }
    return ch;
  }

  async connect(): Promise<void> {
    if (this.state.status === 'open' || this.state.status === 'connecting') return;
    this.intentionalClose = false;
    this.fsm.transition({ type: 'connect_requested' });
    await this.openInternal(0);
  }

  async disconnect(): Promise<void> {
    this.intentionalClose = true;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.heartbeat.stop();
    if (this.transport) {
      this.transport.close(1000, 'user disconnect');
      this.transport = null;
    }
    if (this.state.status !== 'closed') {
      this.fsm.transition({ type: 'disconnect_requested' });
    }
  }

  /**
   * Path B auth refresh: opens a new transport with a fresh token, replays
   * subscriptions, then atomically swaps. Old socket is closed silently.
   *
   * Throws if the new socket fails to open. The existing connection stays
   * usable in that case.
   */
  async refreshAuth(): Promise<void> {
    if (this.state.status !== 'open' || !this.transport) {
      throw new Error('refreshAuth called when not open');
    }

    const token = (await this.cfg.client.getAuthToken?.()) ?? this.cfg.client.apiKey ?? '';
    if (!token) {
      throw new ConnectionError('No auth token or apiKey available', 'unauthorized');
    }

    const kind = this.state.transport;
    const url = kind === 'websocket' ? this.urlBuilder.ws(token) : this.urlBuilder.sse(token);
    const newTransport = createTransport({ kind });
    // Defer wiring main handlers (onMessage / onClose / onError) until after the
    // swap completes — if open() fails, a stray close event mustn't tear down
    // the still-healthy old socket.
    let swapped = false;
    newTransport.onMessage((m) => {
      if (swapped) this.handleMessage(m);
    });
    newTransport.onClose((info) => {
      if (swapped) this.handleClose(info);
    });
    newTransport.onError((err) => {
      if (swapped) this.cfg.onError?.(err);
    });

    try {
      await newTransport.open(url, { authorization: `Bearer ${token}` });
    } catch (err) {
      // Old socket stays; just rethrow.
      try {
        newTransport.close(1000, 'refresh failed');
      } catch {
        /* ignore */
      }
      throw err;
    }

    // Replay subscribes through the new transport directly (don't queue — order matters).
    const channelNames = Array.from(this.channels.values()).map((ch) => ch.name);
    for (const name of channelNames) {
      // Reset each channel's subscription state so dispatch handles the new ack
      const ch = this.channels.get(name)!;
      ch._resetSubscription();
      try {
        await newTransport.send({ type: 'subscribe', channel: name });
      } catch (err) {
        // If a single resubscribe fails, abandon swap and let caller decide.
        newTransport.close(1000, 'refresh aborted');
        throw err;
      }
    }

    // Atomically swap: suppress old socket's onClose, swap transport, close old.
    const oldTransport = this.transport;
    this.suppressDisconnect = true;
    this.transport = newTransport;
    swapped = true;
    oldTransport.close(1000, 'auth refresh');
    // Clear the flag on next tick so legitimate disconnects later still fire.
    setTimeout(() => {
      this.suppressDisconnect = false;
    }, 0);
  }

  /** @internal — public for Channel; routes through queue when not open. */
  async send(msg: ClientMessage): Promise<void> {
    if (this.state.status === 'open' && this.transport) {
      this.cfg.onMessageSent?.(msg);
      await this.transport.send(msg);
      return;
    }
    this.queue.enqueue(msg);
  }

  private async sendDirect(msg: ClientMessage): Promise<void> {
    if (this.state.status === 'open' && this.transport) {
      try {
        await this.transport.send(msg);
      } catch {
        /* heartbeat send failures are non-fatal; timeout will fire if pong missed */
      }
    }
  }

  private async openInternal(attempt: number): Promise<void> {
    this.connectStartedAt = Date.now();
    let resolved: { kind: 'websocket' | 'sse'; reason?: string };
    try {
      resolved = await resolveTransport({ mode: this.cfg.transport ?? 'auto' });
    } catch (err) {
      this.cfg.onError?.(err as Error);
      throw err;
    }
    if (resolved.reason) {
      this.cfg.onTransportFallback?.({
        from: 'websocket',
        to: 'sse',
        reason: resolved.reason,
      });
    }

    const token = (await this.cfg.client.getAuthToken?.()) ?? this.cfg.client.apiKey ?? '';
    if (!token) {
      throw new ConnectionError('No auth token or apiKey available', 'unauthorized');
    }

    const url = resolved.kind === 'websocket' ? this.urlBuilder.ws(token) : this.urlBuilder.sse(token);
    const transport = createTransport({ kind: resolved.kind });
    transport.onMessage((m) => this.handleMessage(m));
    transport.onClose((info) => this.handleClose(info));
    transport.onError((err) => this.cfg.onError?.(err));

    try {
      await transport.open(url, { authorization: `Bearer ${token}` });
    } catch (err) {
      recordTransportFailure(resolved.kind, (err as Error).message ?? 'unknown');
      const delay =
        this.reconnectCfg.enabled ?
          computeBackoffDelay(attempt, {
            initialDelayMs: this.reconnectCfg.initialDelayMs,
            maxDelayMs: this.reconnectCfg.maxDelayMs,
            jitter: this.reconnectCfg.jitter,
            backoffMultiplier: this.reconnectCfg.backoffMultiplier,
          })
        : 0;
      this.fsm.transition({ type: 'connect_failed', error: err as Error, nextDelayMs: delay });
      if (this.reconnectCfg.enabled && !this.intentionalClose && attempt < this.reconnectCfg.maxAttempts) {
        this.cfg.onReconnect?.({ attempt, lastError: err as Error, nextDelayMs: delay });
        this.scheduleRetry(attempt + 1, delay);
        return;
      }
      this.cfg.onError?.(err as Error);
      throw err;
    }

    // Guard against a `disconnect()` that landed while `transport.open()` was
    // pending. Without this check, a stale transport could be assigned after
    // the user explicitly cancelled.
    if (this.intentionalClose) {
      transport.close(1000, 'cancelled by disconnect');
      throw new Error('cancelled by disconnect');
    }

    this.transport = transport;
    this.openedAt = Date.now();
    const latencyMs = Date.now() - this.connectStartedAt;
    this.fsm.transition({ type: 'opened', transport: resolved.kind });
    this.cfg.onConnect?.({ transport: resolved.kind, url, latencyMs });

    // Resubscribe channels after a reconnect (D4). Resets each channel's subscription
    // state and queues a fresh `subscribe`. Pending subscribe promises (if any) are
    // unaffected — they resolve when the server's `subscribed` ack arrives.
    // Enqueue resubscribes (rather than send directly) so they interleave with
    // any messages queued while disconnected — the queue is drained in FIFO
    // order below.
    for (const ch of this.channels.values()) {
      if (ch.isSubscribed) {
        ch._resetSubscription();
        this.queue.enqueue({ type: 'subscribe', channel: ch.name });
      }
    }

    // Drain any messages enqueued while not open (e.g. subscribe sent before
    // the socket finished opening, plus the resubscribes above). Awaited so
    // heartbeat starts only after FIFO drain completes.
    try {
      await this.queue.drain(async (msg) => {
        if (this.transport) await this.transport.send(msg);
      });
    } catch (err) {
      this.cfg.onError?.(err as Error);
    }

    this.heartbeat.start();
  }

  private scheduleRetry(nextAttempt: number, delayMs: number): void {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      if (this.intentionalClose) return;
      this.fsm.transition({ type: 'reconnect_attempt', attempt: nextAttempt });
      this.openInternal(nextAttempt).catch((err) => this.cfg.onError?.(err as Error));
    }, delayMs);
  }

  private handleMessage(msg: ServerMessage): void {
    this.cfg.onMessageReceived?.(msg);
    if (msg.type === 'pong') {
      this.heartbeat.recordPong();
      return;
    }
    for (const ch of this.channels.values()) {
      ch._dispatch(msg);
    }
  }

  private handleClose(info: { code: number; reason: string }): void {
    if (this.suppressDisconnect) {
      // Auth refresh swap — old socket close should not surface or trigger reconnect.
      return;
    }
    const durationMs = this.openedAt > 0 ? Date.now() - this.openedAt : 0;
    this.heartbeat.stop();
    this.transport = null;
    this.openedAt = 0;
    this.cfg.onDisconnect?.({ code: info.code, reason: info.reason, durationMs });

    if (this.intentionalClose || this.state.status === 'closed') {
      return;
    }
    this.handleDropped(new Error(`closed: ${info.code} ${info.reason}`));
  }

  private handleDropped(err: Error): void {
    // Defensive: stop heartbeat first so an interleaved heartbeat-timeout +
    // transport close cannot double-trigger reconnect / leave a timer running.
    this.heartbeat.stop();
    if (this.state.status !== 'open') return;
    this.fsm.transition({ type: 'dropped', error: err });
    if (this.reconnectCfg.enabled && !this.intentionalClose) {
      const delay = computeBackoffDelay(0, {
        initialDelayMs: this.reconnectCfg.initialDelayMs,
        maxDelayMs: this.reconnectCfg.maxDelayMs,
        jitter: this.reconnectCfg.jitter,
        backoffMultiplier: this.reconnectCfg.backoffMultiplier,
      });
      this.fsm.transition({ type: 'backoff_started', attempt: 0, nextDelayMs: delay });
      this.cfg.onReconnect?.({ attempt: 0, lastError: err, nextDelayMs: delay });
      this.scheduleRetry(1, delay);
    }
  }
}
