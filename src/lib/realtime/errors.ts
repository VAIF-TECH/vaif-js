export type RealtimeErrorOptions = {
  channel?: string;
  cause?: unknown;
};

export class RealtimeError extends Error {
  code: string;
  channel?: string;

  constructor(message: string, code: string, opts: RealtimeErrorOptions = {}) {
    super(message);
    this.name = 'RealtimeError';
    this.code = code;
    if (opts.channel !== undefined) {
      this.channel = opts.channel;
    }
    if (opts.cause !== undefined) {
      (this as Error & { cause?: unknown }).cause = opts.cause;
    }
    // Preserve prototype chain across older transpile targets.
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ConnectionError extends RealtimeError {
  constructor(message: string, code: string, opts: RealtimeErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'ConnectionError';
  }
}

export class SubscriptionError extends RealtimeError {
  constructor(message: string, code: string, opts: RealtimeErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'SubscriptionError';
  }
}

export class ProtocolError extends RealtimeError {
  constructor(message: string, code: string, opts: RealtimeErrorOptions = {}) {
    super(message, code, opts);
    this.name = 'ProtocolError';
  }
}
