import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { detectRuntime, resetRuntimeCache } from './runtime';

describe('detectRuntime', () => {
  beforeEach(() => resetRuntimeCache());
  afterEach(() => { vi.unstubAllGlobals(); resetRuntimeCache(); });

  it('detects react-native when navigator.product is ReactNative', () => {
    vi.stubGlobal('navigator', { product: 'ReactNative' });
    expect(detectRuntime()).toBe('react-native');
  });

  it('detects deno when Deno global exists', () => {
    vi.stubGlobal('Deno', { version: { deno: '1.40' } });
    expect(detectRuntime()).toBe('deno');
  });

  it('detects bun when Bun global exists', () => {
    vi.stubGlobal('Bun', { version: '1.0' });
    expect(detectRuntime()).toBe('bun');
  });

  it('detects workerd when navigator.userAgent contains Cloudflare', () => {
    vi.stubGlobal('navigator', { userAgent: 'Cloudflare-Workers' });
    expect(detectRuntime()).toBe('workerd');
  });

  it('detects edge-light when EdgeRuntime global exists', () => {
    vi.stubGlobal('EdgeRuntime', 'edge-runtime');
    expect(detectRuntime()).toBe('edge-light');
  });

  it('falls back to node when only process.versions.node exists', () => {
    // The default test runtime IS node, so we just confirm baseline behavior
    expect(detectRuntime()).toBe('node');
  });

  it('caches the result on repeated calls', () => {
    const first = detectRuntime();
    vi.stubGlobal('Deno', { version: { deno: '1.40' } });
    expect(detectRuntime()).toBe(first); // cached, ignores stub
  });

  it('resetRuntimeCache forces re-detection', () => {
    detectRuntime();
    vi.stubGlobal('Deno', { version: { deno: '1.40' } });
    resetRuntimeCache();
    expect(detectRuntime()).toBe('deno');
  });

  it('detects workerd via WebSocketPair global', () => {
    vi.stubGlobal('WebSocketPair', class {});
    expect(detectRuntime()).toBe('workerd');
  });

  it('falls through to node via process.versions.node when no other signals', () => {
    // Strip all upper-runtime signals; rely on the actual process.versions.node which exists in vitest
    vi.stubGlobal('Deno', undefined);
    vi.stubGlobal('Bun', undefined);
    vi.stubGlobal('WebSocketPair', undefined);
    vi.stubGlobal('EdgeRuntime', undefined);
    vi.stubGlobal('window', undefined);
    // process is the test runtime, leave it as-is
    expect(detectRuntime()).toBe('node');
  });
});
