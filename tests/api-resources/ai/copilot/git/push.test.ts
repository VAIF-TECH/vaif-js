// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Git } from '@vaif/client/resources/ai/copilot/git/git';
import { BasePush } from '@vaif/client/resources/ai/copilot/git/push';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePush],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Git],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { git: { push: BasePush } } } }>) => {
  test('create', async () => {
    const responsePromise = client.ai.copilot.git.push.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource push', () => runTests(client));
describe('resource push (tree shakable, base)', () => runTests(partialClient));
describe('resource push (tree shakable, subresource)', () => runTests(parentPartialClient));
