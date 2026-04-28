// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDownloadURL } from '@vaif/client/resources/storage/download-url';
import { Storage } from '@vaif/client/resources/storage/storage';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDownloadURL],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Storage],
});

const runTests = (client: PartialVaif<{ storage: { downloadURL: BaseDownloadURL } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.storage.downloadURL.create({ key: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.storage.downloadURL.create({ key: 'x', bucket: 'x' });
  });
};
describe('resource downloadURL', () => runTests(client));
describe('resource downloadURL (tree shakable, base)', () => runTests(partialClient));
describe('resource downloadURL (tree shakable, subresource)', () => runTests(parentPartialClient));
