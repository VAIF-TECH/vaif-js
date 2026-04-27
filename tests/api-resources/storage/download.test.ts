// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDownload } from '@vaif/client/resources/storage/download';
import { Storage } from '@vaif/client/resources/storage/storage';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseDownload],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Storage],
});

const runTests = (client: PartialVaif<{ storage: { download: BaseDownload } }>) => {
  test('list', async () => {
    const responsePromise = client.storage.download.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource download', () => runTests(client));
describe('resource download (tree shakable, base)', () => runTests(partialClient));
describe('resource download (tree shakable, subresource)', () => runTests(parentPartialClient));
