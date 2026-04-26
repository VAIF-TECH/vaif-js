// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCopy } from '@vaif/client/resources/storage/files/copy';
import { Files } from '@vaif/client/resources/storage/files/files';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCopy],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Files],
});

const runTests = (client: PartialVaif<{ storage: { files: { copy: BaseCopy } } }>) => {
  test('create', async () => {
    const responsePromise = client.storage.files.copy.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource copy', () => runTests(client));
describe('resource copy (tree shakable, base)', () => runTests(partialClient));
describe('resource copy (tree shakable, subresource)', () => runTests(parentPartialClient));
