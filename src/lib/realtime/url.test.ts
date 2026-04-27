import { describe, it, expect } from 'vitest';
import { RealtimeUrlBuilder } from './url';

describe('RealtimeUrlBuilder', () => {
  it('builds wss:// URL from https:// base', () => {
    const b = new RealtimeUrlBuilder('https://api.vaif.studio');
    expect(b.ws('tok123')).toBe('wss://api.vaif.studio/realtime?token=tok123');
  });

  it('builds ws:// URL from http:// base (dev/local)', () => {
    const b = new RealtimeUrlBuilder('http://localhost:3000');
    expect(b.ws('tok')).toBe('ws://localhost:3000/realtime?token=tok');
  });

  it('preserves explicit ports', () => {
    const b = new RealtimeUrlBuilder('https://api.example.com:8443');
    expect(b.ws('tok')).toBe('wss://api.example.com:8443/realtime?token=tok');
  });

  it('preserves base path prefix', () => {
    const b = new RealtimeUrlBuilder('https://api.example.com/v2');
    // Path should compose: /v2/realtime
    expect(b.ws('tok')).toBe('wss://api.example.com/v2/realtime?token=tok');
  });

  it('builds SSE URL with token in query', () => {
    const b = new RealtimeUrlBuilder('https://api.vaif.studio');
    expect(b.sse('tok')).toBe('https://api.vaif.studio/realtime/sse?token=tok');
  });

  it('builds send URL without token (auth via header)', () => {
    const b = new RealtimeUrlBuilder('https://api.vaif.studio');
    expect(b.send()).toBe('https://api.vaif.studio/realtime/send');
  });

  it('URL-encodes token with special characters', () => {
    const b = new RealtimeUrlBuilder('https://api.vaif.studio');
    expect(b.ws('tok+with/special=chars')).toBe('wss://api.vaif.studio/realtime?token=tok%2Bwith%2Fspecial%3Dchars');
  });

  it('throws on invalid base URL', () => {
    expect(() => new RealtimeUrlBuilder('not-a-url')).toThrow();
  });

  it('strips trailing slash from base path', () => {
    const b = new RealtimeUrlBuilder('https://api.vaif.studio/');
    expect(b.ws('tok')).toBe('wss://api.vaif.studio/realtime?token=tok');
    expect(b.send()).toBe('https://api.vaif.studio/realtime/send');
  });

  it('empty token throws', () => {
    const b = new RealtimeUrlBuilder('https://api.vaif.studio');
    expect(() => b.ws('')).toThrow();
    expect(() => b.sse('')).toThrow();
  });
});
