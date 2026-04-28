// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFind } from '@vaif/client/resources/mongodb/find';
import { MongoDB } from '@vaif/client/resources/mongodb/mongodb';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseFind],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MongoDB],
});

const runTests = (client: PartialVaif<{ mongoDB: { find: BaseFind } }>) => {
  test('cursor', async () => {
    const responsePromise = client.mongoDB.find.cursor('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('find', async () => {
    const responsePromise = client.mongoDB.find.find('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource find', () => runTests(client));
describe('resource find (tree shakable, base)', () => runTests(partialClient));
describe('resource find (tree shakable, subresource)', () => runTests(parentPartialClient));
