import { z } from 'zod';

// ─── Client → Server messages ────────────────────────────────────────────

export const SubscribeSchema = z.object({
  type: z.literal('subscribe'),
  channel: z.string().min(1),
});

export const UnsubscribeSchema = z.object({
  type: z.literal('unsubscribe'),
  channel: z.string().min(1),
});

export const PingSchema = z.object({
  type: z.literal('ping'),
  ts: z.number().optional(),
});

export const BroadcastSchema = z.object({
  type: z.literal('broadcast'),
  channel: z.string().min(1),
  event: z.string().min(1),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export const PresenceTrackSchema = z.object({
  type: z.literal('presence_track'),
  state: z.record(z.string(), z.unknown()).optional(),
});

export const PresenceUpdateSchema = z.object({
  type: z.literal('presence_update'),
  state: z.record(z.string(), z.unknown()),
});

export const PresenceUntrackSchema = z.object({
  type: z.literal('presence_untrack'),
});

export const PresenceListSchema = z.object({
  type: z.literal('presence_list'),
});

export const AuthRefreshSchema = z.object({
  type: z.literal('auth_refresh'),
  token: z.string().min(1),
});

export const ClientMessageSchema = z.discriminatedUnion('type', [
  SubscribeSchema,
  UnsubscribeSchema,
  PingSchema,
  BroadcastSchema,
  PresenceTrackSchema,
  PresenceUpdateSchema,
  PresenceUntrackSchema,
  PresenceListSchema,
  AuthRefreshSchema,
]);

export type ClientMessage = z.infer<typeof ClientMessageSchema>;

// ─── Server → Client messages ────────────────────────────────────────────

export const PongSchema = z.object({
  type: z.literal('pong'),
  ts: z.number().optional(),
});

export const SubscribedSchema = z.object({
  type: z.literal('subscribed'),
  channel: z.string(),
});

export const UnsubscribedSchema = z.object({
  type: z.literal('unsubscribed'),
  channel: z.string(),
});

export const DbChangeEventSchema = z.object({
  type: z.literal('db_change'),
  projectId: z.string(),
  schema: z.string(),
  table: z.string(),
  op: z.enum(['INSERT', 'UPDATE', 'DELETE']),
  record: z.record(z.string(), z.unknown()).optional(),
  old_record: z.record(z.string(), z.unknown()).optional(),
  ts: z.string(),
  partial: z.boolean().optional(),
});

export const BroadcastReceivedSchema = z.object({
  type: z.literal('broadcast'),
  channel: z.string(),
  event: z.string(),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export const PresenceSyncSchema = z.object({
  type: z.literal('presence_sync'),
  channel: z.string().optional(),
  state: z.record(z.string(), z.array(z.record(z.string(), z.unknown()))),
});

export const PresenceJoinSchema = z.object({
  type: z.literal('presence_join'),
  key: z.string(),
  current: z.array(z.record(z.string(), z.unknown())),
  joined: z.array(z.record(z.string(), z.unknown())),
});

export const PresenceLeaveSchema = z.object({
  type: z.literal('presence_leave'),
  key: z.string(),
  current: z.array(z.record(z.string(), z.unknown())),
  left: z.array(z.record(z.string(), z.unknown())),
});

export const AuthRefreshedSchema = z.object({
  type: z.literal('auth_refreshed'),
});

export const ServerErrorSchema = z.object({
  type: z.literal('error'),
  code: z.string(),
  message: z.string(),
  channel: z.string().optional(),
});

export const ServerMessageSchema = z.discriminatedUnion('type', [
  PongSchema,
  SubscribedSchema,
  UnsubscribedSchema,
  DbChangeEventSchema,
  BroadcastReceivedSchema,
  PresenceSyncSchema,
  PresenceJoinSchema,
  PresenceLeaveSchema,
  AuthRefreshedSchema,
  ServerErrorSchema,
]);

export type ServerMessage = z.infer<typeof ServerMessageSchema>;
