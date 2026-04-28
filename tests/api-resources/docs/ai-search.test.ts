// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAISearch } from '@vaif/client/resources/docs/ai-search';
import { Docs } from '@vaif/client/resources/docs/docs';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAISearch],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Docs],
});

const runTests = (client: PartialVaif<{ docs: { aiSearch: BaseAISearch } }>) => {
  test('list', async () => {
    const responsePromise = client.docs.aiSearch.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource aiSearch', () => runTests(client));
describe('resource aiSearch (tree shakable, base)', () => runTests(partialClient));
describe('resource aiSearch (tree shakable, subresource)', () => runTests(parentPartialClient));
