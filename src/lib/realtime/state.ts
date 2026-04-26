import type { ConnectionState } from './types';

export class InvalidTransitionError extends Error {
  constructor(fromStatus: string, eventType: string) {
    super(`Invalid transition: cannot apply '${eventType}' from '${fromStatus}'`);
    this.name = 'InvalidTransitionError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export type StateEvent =
  | { type: 'connect_requested' }
  | { type: 'opened'; transport: 'websocket' | 'sse' }
  | { type: 'connect_failed'; error: Error; nextDelayMs: number }
  | { type: 'dropped'; error?: Error }
  | { type: 'reconnect_attempt'; attempt: number }
  | { type: 'backoff_started'; attempt: number; nextDelayMs: number }
  | { type: 'retry_exhausted' }
  | { type: 'disconnect_requested'; reason?: string };

/**
 * Explicit finite-state machine for the realtime connection lifecycle.
 * Invalid transitions throw `InvalidTransitionError`. Listeners registered
 * via `onChange` fire synchronously after each successful transition.
 */
export class ConnectionStateMachine {
  private _state: ConnectionState = { status: 'idle' };
  private listeners: Array<(s: ConnectionState) => void> = [];

  get state(): ConnectionState {
    return this._state;
  }

  /** Register a state-change listener. Listener throws are caught + logged. */
  onChange(cb: (s: ConnectionState) => void): void {
    this.listeners.push(cb);
  }

  offChange(cb: (s: ConnectionState) => void): void {
    const i = this.listeners.indexOf(cb);
    if (i !== -1) this.listeners.splice(i, 1);
  }

  /** Apply an event. Throws InvalidTransitionError if the event is illegal in the current state. */
  transition(event: StateEvent): void {
    const next = this.compute(this._state, event);
    if (next === null) {
      throw new InvalidTransitionError(this._state.status, event.type);
    }
    this._state = next;
    for (const l of this.listeners) {
      try {
        l(next);
      } catch (err) {
        console.error('[realtime/state] listener threw:', err);
      }
    }
  }

  private compute(state: ConnectionState, event: StateEvent): ConnectionState | null {
    // Universal: disconnect_requested → closed
    if (event.type === 'disconnect_requested') {
      return { status: 'closed', reason: event.reason ?? 'user disconnect' };
    }

    switch (state.status) {
      case 'idle':
      case 'closed':
        if (event.type === 'connect_requested') {
          return { status: 'connecting', attempt: 0 };
        }
        return null;

      case 'connecting': {
        if (event.type === 'opened') return { status: 'open', transport: event.transport };
        if (event.type === 'connect_failed') {
          return { status: 'backing-off', attempt: state.attempt, nextDelayMs: event.nextDelayMs };
        }
        return null;
      }

      case 'open':
        if (event.type === 'dropped') {
          return event.error
            ? { status: 'reconnecting', attempt: 0, lastError: event.error }
            : { status: 'reconnecting', attempt: 0 };
        }
        return null;

      case 'reconnecting': {
        if (event.type === 'opened') return { status: 'open', transport: event.transport };
        if (event.type === 'backoff_started') {
          return { status: 'backing-off', attempt: event.attempt, nextDelayMs: event.nextDelayMs };
        }
        return null;
      }

      case 'backing-off': {
        if (event.type === 'reconnect_attempt') return { status: 'connecting', attempt: event.attempt };
        if (event.type === 'retry_exhausted') return { status: 'closed', reason: 'retry budget exhausted' };
        return null;
      }

      default:
        return assertNever(state);
    }
  }
}

function assertNever(_x: never): never {
  throw new Error('exhaustive check failed');
}
