# Realtime Quickstart

The `@vaif/client/realtime` subpath gives you a tree-shakable WebSocket realtime client with channel-based pub/sub, presence, postgres CDC events, and an SSE fallback for environments where WebSockets are blocked.

## 5-line hello

```ts
import { Vaif } from '@vaif/client';
import { Realtime } from '@vaif/client/realtime';

const vaif = new Vaif({ apiKey: process.env.VAIF_API_KEY });
const realtime = new Realtime({ client: vaif });

await realtime.connect();
const channel = realtime.channel('room:123');
channel.on('broadcast', { event: 'message' }, (p) => console.log(p));
await channel.subscribe();
```

## Three event types

```ts
// Postgres CDC (insert/update/delete on a table)
channel.on('postgres_changes',
  { event: 'INSERT', table: 'messages', filter: 'room_id=eq.123' },
  (payload) => { /* payload.record, payload.old_record */ },
);

// Custom broadcast events from other clients
channel.on('broadcast',
  { event: 'typing' },
  (payload) => { /* { user_id: 'abc' } */ },
);

// Presence (join/leave/sync)
channel.on('presence', { event: 'sync' }, () => {
  const state = channel.presenceState();
});
```

## Sending and tracking presence

```ts
await channel.send({ type: 'broadcast', event: 'typing', payload: { user_id: 'abc' } });
await channel.track({ user_id: 'abc', status: 'online' });
await channel.untrack();
```

## Configuration

```ts
new Realtime({
  client: vaif,

  // 'auto' (default) prefers WebSocket, falls back to SSE if WS is blocked
  transport: 'auto',

  reconnect: {
    enabled: true,
    initialDelayMs: 1_000,
    maxDelayMs: 30_000,
    jitter: 0.3,
    backoffMultiplier: 2,
    maxAttempts: Infinity,
  },

  heartbeat: { intervalMs: 30_000, timeoutMs: 10_000 },

  outgoingQueue: { maxSize: 100, onDrop: 'oldest' },

  // Telemetry hooks (all optional)
  onConnect: (info) => {},
  onDisconnect: (info) => {},
  onReconnect: (info) => {},
  onError: (err) => {},
  onMessageDropped: ({ msg, reason }) => {},
});
```

## Auth refresh

When your JWT rotates, call `realtime.refreshAuth()`. The client opens a new socket with the fresh token, replays subscriptions, and atomically swaps. Channels stay subscribed; the user sees no interruption.

```ts
// In your auth provider's onTokenRefreshed callback:
await realtime.refreshAuth();
```

## What "auto" transport actually does

1. Try WebSocket. If it opens within 5s, use it.
2. If WebSocket fails (corporate firewall, TLS termination quirks, etc.), record the failure in a session-local cache and fall back to SSE.
3. SSE receives server pushes via the standard `text/event-stream` channel. Outbound messages go via `POST /realtime/send` with the same auth.

`onTransportFallback` telemetry fires when the fallback happens — useful for ops dashboards.

## Error model

| Class | Surfaces in |
|---|---|
| `ConnectionError` | `realtime.onError` and `connect()` rejection |
| `SubscriptionError` | `channel.subscribe()` rejection |
| `ProtocolError` | `realtime.onError` (logged-only) |

## Runtime support

Works in: Node ≥18, Deno, Bun, Cloudflare Workers (SSE recommended), Vercel Edge (SSE), modern browsers, React Native (with polyfills).
