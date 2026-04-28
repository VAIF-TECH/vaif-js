// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Chat } from '@vaif/client/resources/ai/copilot/chat/chat';
import { BaseStream } from '@vaif/client/resources/ai/copilot/chat/stream';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseStream],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Chat],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { chat: { stream: BaseStream } } } }>) => {
  test('create', async () => {
    const responsePromise = client.ai.copilot.chat.stream.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource stream', () => runTests(client));
describe('resource stream (tree shakable, base)', () => runTests(partialClient));
describe('resource stream (tree shakable, subresource)', () => runTests(parentPartialClient));
