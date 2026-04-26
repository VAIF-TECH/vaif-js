/**
 * Message-level encryption hook for compliance customers.
 *
 * The cipher is consulted for every outgoing/incoming `payload` body.
 * Channel name and event type stay clear so the server can route messages
 * without seeing payload contents.
 *
 * v0.3 ships only the interface + a no-op default. Real implementations
 * (e.g., AES-GCM with KMS-managed keys) are a future release.
 *
 * Implementations MAY return the input `Uint8Array` by reference when the
 * operation is a no-op. Consumers MUST NOT mutate the returned buffer.
 *
 * Future extension point: a 3rd `options` argument may be added for AAD,
 * nonce hints, or per-message metadata. The 2-arg shape is the v0.3 contract.
 */
export interface MessageCipher {
  encrypt(channel: string, plaintext: Uint8Array): Promise<Uint8Array>;
  decrypt(channel: string, ciphertext: Uint8Array): Promise<Uint8Array>;
}

/**
 * Pass-through cipher used when no encryption is configured.
 * Returns the input by reference (no copy) for zero overhead on the hot path.
 * Per the interface contract, callers must treat the result as immutable.
 */
export const NoopCipher: MessageCipher = {
  async encrypt(_channel, plaintext) {
    return plaintext;
  },
  async decrypt(_channel, ciphertext) {
    return ciphertext;
  },
};
