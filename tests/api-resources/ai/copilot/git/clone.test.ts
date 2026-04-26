// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseClone } from '@vaif/client/resources/ai/copilot/git/clone';
import { Git } from '@vaif/client/resources/ai/copilot/git/git';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseClone],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Git],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { git: { clone: BaseClone } } } }>) => {
  test('create', async () => {
    const responsePromise = client.ai.copilot.git.clone.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource clone', () => runTests(client));
describe('resource clone (tree shakable, base)', () => runTests(partialClient));
describe('resource clone (tree shakable, subresource)', () => runTests(parentPartialClient));
