// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Enterprise } from '@vaif/client/resources/enterprise/enterprise';
import { BaseQuotes } from '@vaif/client/resources/enterprise/quotes/quotes';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseQuotes],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Enterprise],
});

const runTests = (client: PartialVaif<{ enterprise: { quotes: BaseQuotes } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.enterprise.quotes.retrieve('quoteId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource quotes', () => runTests(client));
describe('resource quotes (tree shakable, base)', () => runTests(partialClient));
describe('resource quotes (tree shakable, subresource)', () => runTests(parentPartialClient));
