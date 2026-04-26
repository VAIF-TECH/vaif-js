import { describe, it, expect } from 'vitest';
import { PresenceTracker } from './presence';

describe('PresenceTracker', () => {
  it('starts empty', () => {
    const t = new PresenceTracker();
    expect(t.state()).toEqual({});
  });

  it('handleSync replaces full state', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online' }], bob: [{ status: 'away' }] });
    expect(t.state()).toEqual({
      alice: [{ status: 'online' }],
      bob: [{ status: 'away' }],
    });
  });

  it('handleSync replaces (does not merge) prior state', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online' }] });
    t.handleSync({ bob: [{ status: 'online' }] });
    expect(t.state()).toEqual({ bob: [{ status: 'online' }] });
    expect(t.state()['alice']).toBeUndefined();
  });

  it('handleJoin adds a new key', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online' }] });
    t.handleJoin('bob', [{ status: 'online' }], [{ status: 'online' }]);
    expect(t.state()['bob']).toEqual([{ status: 'online' }]);
    expect(t.state()['alice']).toEqual([{ status: 'online' }]);
  });

  it('handleJoin updates an existing key (replaces with current)', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online', tab: 1 }] });
    // alice opens a second tab — server reports current = both tabs, joined = just the new one
    t.handleJoin('alice', [{ status: 'online', tab: 1 }, { status: 'online', tab: 2 }], [{ status: 'online', tab: 2 }]);
    expect(t.state()['alice']).toEqual([{ status: 'online', tab: 1 }, { status: 'online', tab: 2 }]);
  });

  it('handleLeave removes the key when current is empty', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online' }], bob: [{ status: 'online' }] });
    t.handleLeave('alice', [], [{ status: 'online' }]);
    expect(t.state()['alice']).toBeUndefined();
    expect(t.state()['bob']).toEqual([{ status: 'online' }]);
  });

  it('handleLeave keeps the key when current is non-empty (one tab left)', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online', tab: 1 }, { status: 'online', tab: 2 }] });
    // alice closes tab 2 — current = just tab 1, left = tab 2
    t.handleLeave('alice', [{ status: 'online', tab: 1 }], [{ status: 'online', tab: 2 }]);
    expect(t.state()['alice']).toEqual([{ status: 'online', tab: 1 }]);
  });

  it('clear empties state', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online' }] });
    t.clear();
    expect(t.state()).toEqual({});
  });

  it('state() returns a shallow copy (mutations do not leak)', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online' }] });
    const s = t.state();
    delete s['alice'];
    expect(t.state()['alice']).toBeDefined();
  });

  it('mutating returned state does not affect internal', () => {
    const t = new PresenceTracker();
    t.handleSync({ alice: [{ status: 'online' }] });
    const s = t.state();
    s['alice']![0]!['status'] = 'CORRUPTED';
    expect(t.state()['alice']![0]!['status']).toBe('online');
  });

  it('mutating input to handleSync does not affect internal', () => {
    const t = new PresenceTracker();
    const input = { alice: [{ status: 'online' }] };
    t.handleSync(input);
    input.alice[0]!['status'] = 'MUTATED';
    expect(t.state()['alice']![0]!['status']).toBe('online');
  });

  it('mutating current array passed to handleJoin does not affect internal', () => {
    const t = new PresenceTracker();
    const current = [{ status: 'online' }];
    t.handleJoin('alice', current, current);
    current[0]!['status'] = 'MUTATED';
    expect(t.state()['alice']![0]!['status']).toBe('online');
  });
});
