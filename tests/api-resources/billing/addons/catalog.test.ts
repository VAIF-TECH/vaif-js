// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Addons } from '@vaif/client/resources/billing/addons/addons';
import { BaseCatalog } from '@vaif/client/resources/billing/addons/catalog';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCatalog],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Addons],
});

const runTests = (client: PartialVaif<{ billing: { addons: { catalog: BaseCatalog } } }>) => {
  test('list', async () => {
    const responsePromise = client.billing.addons.catalog.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource catalog', () => runTests(client));
describe('resource catalog (tree shakable, base)', () => runTests(partialClient));
describe('resource catalog (tree shakable, subresource)', () => runTests(parentPartialClient));
