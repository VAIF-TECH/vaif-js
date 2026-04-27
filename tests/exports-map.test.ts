import { describe, it, expect } from 'vitest';
import pkg from '../package.json';

const SUBPATHS = ['./realtime', './storage', './storage/browser', './storage/resume'] as const;

describe('package.json exports', () => {
  it('exposes the realtime subpath', () => {
    expect(pkg.exports['./realtime']).toBeDefined();
    expect(JSON.stringify(pkg.exports['./realtime'])).toContain('lib/realtime');
  });

  it('exposes the storage subpath', () => {
    expect(pkg.exports['./storage']).toBeDefined();
  });

  it('exposes the storage/browser subpath', () => {
    expect(pkg.exports['./storage/browser']).toBeDefined();
  });

  it('exposes the storage/resume subpath', () => {
    expect(pkg.exports['./storage/resume']).toBeDefined();
  });

  it('marks the package side-effect-free for tree-shaking', () => {
    expect(pkg.sideEffects).toBe(false);
  });

  it.each(SUBPATHS)('subpath %s declares import + require + types', (key) => {
    const entry = pkg.exports[key];
    expect(entry).toMatchObject({
      import: expect.any(String),
      require: expect.any(String),
      types: expect.any(String),
    });
  });

  it.each(SUBPATHS)('subpath %s targets ./dist/', (key) => {
    const entry = pkg.exports[key];
    for (const target of [entry.import, entry.require, entry.types]) {
      expect(target).toMatch(/^\.\/dist\//);
    }
  });

  it('orders specific subpaths before any ./* wildcards', () => {
    const keys = Object.keys(pkg.exports);
    const wildcardIdx = keys.findIndex((k) => k.startsWith('./*'));
    if (wildcardIdx === -1) return; // no wildcards => nothing to check
    for (const sub of SUBPATHS) {
      const subIdx = keys.indexOf(sub);
      expect(subIdx, `${sub} must come before ${keys[wildcardIdx]}`).toBeLessThan(wildcardIdx);
    }
  });
});
