import { describe, it, expect } from 'vitest';
import { ClientMessageSchema, ServerMessageSchema } from './protocol';

describe('ClientMessageSchema', () => {
  it('parses subscribe', () => {
    const r = ClientMessageSchema.parse({ type: 'subscribe', channel: 'room:1' });
    expect(r.type).toBe('subscribe');
  });

  it('parses unsubscribe', () => {
    expect(() => ClientMessageSchema.parse({ type: 'unsubscribe', channel: 'room:1' })).not.toThrow();
  });

  it('parses ping (with and without ts)', () => {
    expect(() => ClientMessageSchema.parse({ type: 'ping' })).not.toThrow();
    expect(() => ClientMessageSchema.parse({ type: 'ping', ts: 12345 })).not.toThrow();
  });

  it('parses broadcast with payload', () => {
    const r = ClientMessageSchema.parse({
      type: 'broadcast',
      channel: 'room:1',
      event: 'typing',
      payload: { user_id: 'abc' },
    });
    expect(r.type).toBe('broadcast');
  });

  it('parses presence_track with state', () => {
    expect(() => ClientMessageSchema.parse({
      type: 'presence_track',
      state: { user_id: 'abc', status: 'online' },
    })).not.toThrow();
  });

  it('parses presence_update', () => {
    expect(() => ClientMessageSchema.parse({
      type: 'presence_update',
      state: { status: 'away' },
    })).not.toThrow();
  });

  it('parses presence_untrack', () => {
    expect(() => ClientMessageSchema.parse({ type: 'presence_untrack' })).not.toThrow();
  });

  it('parses presence_list', () => {
    expect(() => ClientMessageSchema.parse({ type: 'presence_list' })).not.toThrow();
  });

  it('parses auth_refresh', () => {
    expect(() => ClientMessageSchema.parse({ type: 'auth_refresh', token: 'tok' })).not.toThrow();
  });

  it('rejects unknown type', () => {
    expect(() => ClientMessageSchema.parse({ type: 'whatever' })).toThrow();
  });

  it('rejects subscribe without channel', () => {
    expect(() => ClientMessageSchema.parse({ type: 'subscribe' })).toThrow();
  });

  it('rejects subscribe with empty channel', () => {
    expect(() => ClientMessageSchema.parse({ type: 'subscribe', channel: '' })).toThrow();
  });
});

describe('ServerMessageSchema', () => {
  it('parses db_change INSERT', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'db_change',
      projectId: 'p1',
      schema: 'public',
      table: 'messages',
      op: 'INSERT',
      record: { id: 1 },
      ts: '2026-04-26T00:00:00Z',
    })).not.toThrow();
  });

  it('parses db_change UPDATE with old_record', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'db_change',
      projectId: 'p1',
      schema: 'public',
      table: 'messages',
      op: 'UPDATE',
      record: { id: 1, body: 'new' },
      old_record: { id: 1, body: 'old' },
      ts: '2026-04-26T00:00:00Z',
    })).not.toThrow();
  });

  it('parses db_change DELETE', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'db_change',
      projectId: 'p1',
      schema: 'public',
      table: 'messages',
      op: 'DELETE',
      old_record: { id: 1 },
      ts: '2026-04-26T00:00:00Z',
    })).not.toThrow();
  });

  it('parses pong', () => {
    expect(() => ServerMessageSchema.parse({ type: 'pong', ts: 123 })).not.toThrow();
  });

  it('parses subscribed ack', () => {
    expect(() => ServerMessageSchema.parse({ type: 'subscribed', channel: 'room:1' })).not.toThrow();
  });

  it('parses unsubscribed ack', () => {
    expect(() => ServerMessageSchema.parse({ type: 'unsubscribed', channel: 'room:1' })).not.toThrow();
  });

  it('parses broadcast received', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'broadcast', channel: 'room:1', event: 'msg', payload: { x: 1 },
    })).not.toThrow();
  });

  it('parses presence_sync', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'presence_sync',
      channel: 'room:1',
      state: { alice: [{ status: 'online' }] },
    })).not.toThrow();
  });

  it('parses presence_join', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'presence_join',
      key: 'alice',
      current: [{ status: 'online' }],
      joined: [{ status: 'online' }],
    })).not.toThrow();
  });

  it('parses presence_leave', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'presence_leave',
      key: 'alice',
      current: [],
      left: [{ status: 'online' }],
    })).not.toThrow();
  });

  it('parses auth_refreshed', () => {
    expect(() => ServerMessageSchema.parse({ type: 'auth_refreshed' })).not.toThrow();
  });

  it('parses error', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'error', code: 'rate_limited', message: 'too many',
    })).not.toThrow();
  });

  it('rejects unknown server type', () => {
    expect(() => ServerMessageSchema.parse({ type: 'unknown' })).toThrow();
  });

  it('rejects db_change with invalid op', () => {
    expect(() => ServerMessageSchema.parse({
      type: 'db_change', projectId: 'p', schema: 's', table: 't',
      op: 'TRUNCATE', ts: '2026-04-26T00:00:00Z',
    })).toThrow();
  });
});
