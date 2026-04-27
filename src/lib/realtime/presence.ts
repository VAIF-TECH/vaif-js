import type { PresenceState, PresenceMeta } from './types';

/** Defensive deep-clone of a meta object (small, plain JSON). */
function cloneMeta(m: PresenceMeta): PresenceMeta {
  return { ...m };
}

/** Deep-clone a metas list (one level + cloning each meta). */
function cloneMetas(metas: PresenceMeta[]): PresenceMeta[] {
  return metas.map(cloneMeta);
}

/** Deep-clone a presence state map. */
function cloneState(state: PresenceState): PresenceState {
  const out: PresenceState = {};
  for (const [key, metas] of Object.entries(state)) {
    out[key] = cloneMetas(metas);
  }
  return out;
}

/**
 * Tracks per-channel presence membership. Defensively deep-clones inputs and
 * outputs so callers cannot mutate internal state via retained references.
 *
 * Per-channel: instantiate one tracker per channel.
 */
export class PresenceTracker {
  private _state: PresenceState = {};

  /** Returns a deep copy of the current state. Safe to mutate. */
  state(): PresenceState {
    return cloneState(this._state);
  }

  /** Replaces the entire state with the server-provided sync payload (deep-cloned). */
  handleSync(state: PresenceState): void {
    this._state = cloneState(state);
  }

  /**
   * Handles a `presence_join` event. Server reports the current full membership
   * for this key (post-join); we store a deep-cloned copy.
   */
  handleJoin(key: string, current: PresenceMeta[], _joined: PresenceMeta[]): void {
    this._state[key] = cloneMetas(current);
  }

  /**
   * Handles a `presence_leave` event. Removes the key if `current` is empty,
   * otherwise updates the membership (deep-cloned).
   */
  handleLeave(key: string, current: PresenceMeta[], _left: PresenceMeta[]): void {
    if (current.length === 0) {
      delete this._state[key];
    } else {
      this._state[key] = cloneMetas(current);
    }
  }

  clear(): void {
    this._state = {};
  }
}
