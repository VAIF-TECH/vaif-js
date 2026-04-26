// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAbort } from '@vaif/client/resources/storage/multipart/abort';
import { Multipart } from '@vaif/client/resources/storage/multipart/multipart';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseAbort],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Multipart],
});

const runTests = (client: PartialVaif<{ storage: { multipart: { abort: BaseAbort } } }>) => {
  test('abort: only required params', async () => {
    const responsePromise = client.storage.multipart.abort.abort('x', { bucketId: 'x', key: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('abort: required and optional params', async () => {
    const response = await client.storage.multipart.abort.abort('x', { bucketId: 'x', key: 'x' });
  });
};
describe('resource abort', () => runTests(client));
describe('resource abort (tree shakable, base)', () => runTests(partialClient));
describe('resource abort (tree shakable, subresource)', () => runTests(parentPartialClient));
