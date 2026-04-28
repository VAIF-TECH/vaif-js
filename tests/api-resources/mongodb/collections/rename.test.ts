// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Collections } from '@vaif/client/resources/mongodb/collections/collections';
import { BaseRename } from '@vaif/client/resources/mongodb/collections/rename';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRename],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Collections],
});

const runTests = (client: PartialVaif<{ mongoDB: { collections: { rename: BaseRename } } }>) => {
  test('rename', async () => {
    const responsePromise = client.mongoDB.collections.rename.rename('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource rename', () => runTests(client));
describe('resource rename (tree shakable, base)', () => runTests(partialClient));
describe('resource rename (tree shakable, subresource)', () => runTests(parentPartialClient));
