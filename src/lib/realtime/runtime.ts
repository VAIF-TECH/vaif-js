export type Runtime = 'browser' | 'node' | 'deno' | 'bun' | 'workerd' | 'edge-light' | 'react-native';

type RuntimeGlobals = Partial<{
  Deno: { version: { deno: string } };
  Bun: { version: string };
  EdgeRuntime: unknown;
  WebSocketPair: unknown;
  window: unknown;
  WebSocket: unknown;
  process: { versions?: { node?: string } };
  navigator: { product?: string; userAgent?: string };
}>;

let _cached: Runtime | undefined;

export function detectRuntime(): Runtime {
  if (_cached) return _cached;

  const g = globalThis as RuntimeGlobals;

  if (g.navigator?.product === 'ReactNative') {
    return (_cached = 'react-native');
  }
  if (g.Deno?.version) {
    return (_cached = 'deno');
  }
  if (g.Bun?.version) {
    return (_cached = 'bun');
  }
  // Workerd: check WebSocketPair (canonical) first, then userAgent fallback
  if (typeof g.WebSocketPair !== 'undefined') {
    return (_cached = 'workerd');
  }
  if (typeof g.navigator?.userAgent === 'string' && g.navigator.userAgent.includes('Cloudflare')) {
    return (_cached = 'workerd');
  }
  if (typeof g.EdgeRuntime !== 'undefined') {
    return (_cached = 'edge-light');
  }
  // Browser detection. Note: jsdom/happy-dom test environments will also register as 'browser',
  // which is intentional — code under test should behave the same as in a real browser.
  if (typeof g.window !== 'undefined' && typeof g.WebSocket !== 'undefined') {
    return (_cached = 'browser');
  }
  if (g.process?.versions?.node) {
    return (_cached = 'node');
  }

  return (_cached = 'node'); // safe default
}

export function resetRuntimeCache(): void {
  _cached = undefined;
}
