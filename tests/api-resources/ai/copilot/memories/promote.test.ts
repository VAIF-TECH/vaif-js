// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Memories } from '@vaif/api/resources/ai/copilot/memories/memories';
import { BasePromote } from '@vaif/api/resources/ai/copilot/memories/promote';

import Vaif from '@vaif/api';
import { createClient, type PartialVaif } from '@vaif/api/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePromote],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Memories],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { memories: { promote: BasePromote } } } }>) => {
  test('promote', async () => {
    const responsePromise = client.ai.copilot.memories.promote.promote('memoryId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource promote', () => runTests(client));
describe('resource promote (tree shakable, base)', () => runTests(partialClient));
describe('resource promote (tree shakable, subresource)', () => runTests(parentPartialClient));
