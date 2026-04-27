import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Stainless lib/ preservation guard', () => {
  it('keeps src/lib/realtime/ intact after any rebuild', () => {
    const dir = path.join(__dirname, '..', 'src', 'lib', 'realtime');
    expect(fs.existsSync(dir)).toBe(true);
    expect(fs.statSync(dir).isDirectory()).toBe(true);
    // Sentinel file we expect to always exist
    expect(fs.existsSync(path.join(dir, 'index.ts'))).toBe(true);
  });

  it('keeps src/lib/storage/ intact after any rebuild', () => {
    const dir = path.join(__dirname, '..', 'src', 'lib', 'storage');
    expect(fs.existsSync(dir)).toBe(true);
    expect(fs.existsSync(path.join(dir, 'index.ts'))).toBe(true);
    expect(fs.existsSync(path.join(dir, 'upload.ts'))).toBe(true);
    expect(fs.existsSync(path.join(dir, 'multipart.ts'))).toBe(true);
  });

  it('exports map still includes our subpaths', () => {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'),
    );
    expect(pkg.exports['./realtime']).toBeDefined();
    expect(pkg.exports['./storage']).toBeDefined();
    expect(pkg.exports['./storage/browser']).toBeDefined();
    expect(pkg.exports['./storage/resume']).toBeDefined();
  });
});
