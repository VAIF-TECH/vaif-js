// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Buckets } from '@vaif/api/resources/buckets/buckets';
import { BaseUploadURL } from '@vaif/api/resources/buckets/upload-url';

import Vaif from '@vaif/api';
import { createClient, type PartialVaif } from '@vaif/api/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseUploadURL],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Buckets],
});

const runTests = (client: PartialVaif<{ buckets: { uploadURL: BaseUploadURL } }>) => {
  test('uploadURL', async () => {
    const responsePromise = client.buckets.uploadURL.uploadURL('bucketId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource uploadURL', () => runTests(client));
describe('resource uploadURL (tree shakable, base)', () => runTests(partialClient));
describe('resource uploadURL (tree shakable, subresource)', () => runTests(parentPartialClient));
