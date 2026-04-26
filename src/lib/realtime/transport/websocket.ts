import type { Transport, TransportCapabilities, CloseInfo } from './index';
import type { ClientMessage, ServerMessage } from '../protocol';

/** Stub — full implementation lands in Task C2. */
export class WSTransport implements Transport {
  capabilities: TransportCapabilities = {
    bidirectional: true,
    binarySupport: true,
    serverPush: true,
  };

  async open(_url: string, _headers: Record<string, string>): Promise<void> {
    throw new Error('WSTransport.open not implemented (Task C2)');
  }

  async send(_msg: ClientMessage): Promise<void> {
    throw new Error('WSTransport.send not implemented (Task C2)');
  }

  close(_code?: number, _reason?: string): void {
    // no-op stub
  }

  onMessage(_cb: (msg: ServerMessage) => void): void {
    // no-op stub
  }

  onClose(_cb: (info: CloseInfo) => void): void {
    // no-op stub
  }
}
