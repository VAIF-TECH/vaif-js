// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Multipart } from '@vaif/client/resources/storage/multipart/multipart';
import { BasePartURL } from '@vaif/client/resources/storage/multipart/part-url';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BasePartURL],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Multipart],
});

const runTests = (client: PartialVaif<{ storage: { multipart: { partURL: BasePartURL } } }>) => {
  test('partURL: only required params', async () => {
    const responsePromise = client.storage.multipart.partURL.partURL('x', {
    bucketId: 'x',
    key: 'x',
    partNumber: 1,
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('partURL: required and optional params', async () => {
    const response = await client.storage.multipart.partURL.partURL('x', {
    bucketId: 'x',
    key: 'x',
    partNumber: 1,
  });
  });
};
describe('resource partURL', () => runTests(client));
describe('resource partURL (tree shakable, base)', () => runTests(partialClient));
describe('resource partURL (tree shakable, subresource)', () => runTests(parentPartialClient));
