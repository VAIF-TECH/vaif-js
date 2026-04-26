// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseGenerate } from '@vaif/client/resources/sdk/generate';
import { SDK } from '@vaif/client/resources/sdk/sdk';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseGenerate],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [SDK],
});

const runTests = (client: PartialVaif<{ sdk: { generate: BaseGenerate } }>) => {
  test('create', async () => {
    const responsePromise = client.sdk.generate.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource generate', () => runTests(client));
describe('resource generate (tree shakable, base)', () => runTests(partialClient));
describe('resource generate (tree shakable, subresource)', () => runTests(parentPartialClient));
