// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCompare } from '@vaif/client/resources/pricing/compare';
import { Pricing } from '@vaif/client/resources/pricing/pricing';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCompare],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Pricing],
});

const runTests = (client: PartialVaif<{ pricing: { compare: BaseCompare } }>) => {
  test('list', async () => {
    const responsePromise = client.pricing.compare.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource compare', () => runTests(client));
describe('resource compare (tree shakable, base)', () => runTests(partialClient));
describe('resource compare (tree shakable, subresource)', () => runTests(parentPartialClient));
