// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Generated } from '@vaif/client/resources/generated/generated';
import { BaseQuery } from '@vaif/client/resources/generated/query';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseQuery],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Generated],
});

const runTests = (client: PartialVaif<{ generated: { query: BaseQuery } }>) => {
  test('query', async () => {
    const responsePromise = client.generated.query.query('table');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource query', () => runTests(client));
describe('resource query (tree shakable, base)', () => runTests(partialClient));
describe('resource query (tree shakable, subresource)', () => runTests(parentPartialClient));
