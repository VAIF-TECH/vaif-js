import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  Realtime,
  Channel,
  NoopCipher,
  RealtimeError,
  ConnectionError,
  SubscriptionError,
  ProtocolError,
} from './index';

const INDEX_PATH = join(process.cwd(), 'src/lib/realtime/index.ts');

describe('@vaif/client/realtime public exports', () => {
  it('exports Realtime as an alias for the client class', () => {
    expect(typeof Realtime).toBe('function');
    expect(Realtime.name).toBe('RealtimeClient');
  });

  it('exports Channel class', () => {
    expect(typeof Channel).toBe('function');
    expect(Channel.name).toBe('Channel');
  });

  it('exports NoopCipher implementing MessageCipher', () => {
    expect(typeof NoopCipher.encrypt).toBe('function');
    expect(typeof NoopCipher.decrypt).toBe('function');
  });

  it('exports RealtimeError + 3 subclasses', () => {
    expect(typeof RealtimeError).toBe('function');
    expect(typeof ConnectionError).toBe('function');
    expect(typeof SubscriptionError).toBe('function');
    expect(typeof ProtocolError).toBe('function');
    const e = new ConnectionError('x', 'y');
    expect(e).toBeInstanceOf(RealtimeError);
  });

  it('does NOT leak internal modules (transport, state, queue, heartbeat)', () => {
    const src = readFileSync(INDEX_PATH, 'utf-8');
    expect(src).not.toMatch(/from ['"]\.\/transport/);
    expect(src).not.toMatch(/from ['"]\.\/state/);
    expect(src).not.toMatch(/from ['"]\.\/queue/);
    expect(src).not.toMatch(/from ['"]\.\/heartbeat/);
    expect(src).not.toMatch(/from ['"]\.\/protocol/);
    expect(src).not.toMatch(/from ['"]\.\/backoff/);
    expect(src).not.toMatch(/from ['"]\.\/runtime/);
    expect(src).not.toMatch(/from ['"]\.\/url/);
    expect(src).not.toMatch(/from ['"]\.\/token-bucket/);
    expect(src).not.toMatch(/from ['"]\.\/presence/);
  });
});
