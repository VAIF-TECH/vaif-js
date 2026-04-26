import type { Transport, TransportCapabilities, CloseInfo } from './index';
import type { ClientMessage, ServerMessage } from '../protocol';

/** Stub — full implementation lands in Task C3. */
export class SSETransport implements Transport {
  capabilities: TransportCapabilities = {
    bidirectional: false,
    binarySupport: false,
    serverPush: true,
  };

  async open(_url: string, _headers: Record<string, string>): Promise<void> {
    throw new Error('SSETransport.open not implemented (Task C3)');
  }

  async send(_msg: ClientMessage): Promise<void> {
    throw new Error('SSETransport.send not implemented (Task C3)');
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
