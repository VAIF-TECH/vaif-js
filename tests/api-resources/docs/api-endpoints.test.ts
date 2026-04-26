// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAPIEndpoints } from '@vaif/client/resources/docs/api-endpoints';
import { Docs } from '@vaif/client/resources/docs/docs';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseAPIEndpoints],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Docs],
});

const runTests = (client: PartialVaif<{ docs: { apiEndpoints: BaseAPIEndpoints } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.docs.apiEndpoints.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.docs.apiEndpoints.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource apiEndpoints', () => runTests(client));
describe('resource apiEndpoints (tree shakable, base)', () => runTests(partialClient));
describe('resource apiEndpoints (tree shakable, subresource)', () => runTests(parentPartialClient));
