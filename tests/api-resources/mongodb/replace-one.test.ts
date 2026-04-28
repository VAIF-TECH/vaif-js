// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { MongoDB } from '@vaif/client/resources/mongodb/mongodb';
import { BaseReplaceOne } from '@vaif/client/resources/mongodb/replace-one';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseReplaceOne],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MongoDB],
});

const runTests = (client: PartialVaif<{ mongoDB: { replaceOne: BaseReplaceOne } }>) => {
  test('replaceOne', async () => {
    const responsePromise = client.mongoDB.replaceOne.replaceOne('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource replaceOne', () => runTests(client));
describe('resource replaceOne (tree shakable, base)', () => runTests(partialClient));
describe('resource replaceOne (tree shakable, subresource)', () => runTests(parentPartialClient));
