// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Storage } from '@vaif/client/resources/storage/storage';
import { BaseUpload } from '@vaif/client/resources/storage/upload';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseUpload],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Storage],
});

const runTests = (client: PartialVaif<{ storage: { upload: BaseUpload } }>) => {
  test('create', async () => {
    const responsePromise = client.storage.upload.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource upload', () => runTests(client));
describe('resource upload (tree shakable, base)', () => runTests(partialClient));
describe('resource upload (tree shakable, subresource)', () => runTests(parentPartialClient));
