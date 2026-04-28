// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Storage } from '@vaif/client/resources/storage/storage';
import { BaseUploadFromURL } from '@vaif/client/resources/storage/upload-from-url';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseUploadFromURL],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Storage],
});

const runTests = (client: PartialVaif<{ storage: { uploadFromURL: BaseUploadFromURL } }>) => {
  test('create', async () => {
    const responsePromise = client.storage.uploadFromURL.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource uploadFromURL', () => runTests(client));
describe('resource uploadFromURL (tree shakable, base)', () => runTests(partialClient));
describe('resource uploadFromURL (tree shakable, subresource)', () => runTests(parentPartialClient));
