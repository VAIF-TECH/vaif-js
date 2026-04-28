// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDistinct } from '@vaif/client/resources/mongodb/distinct';
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
  resources: [BaseDistinct],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MongoDB],
});

const runTests = (client: PartialVaif<{ mongoDB: { distinct: BaseDistinct } }>) => {
  test('distinct', async () => {
    const responsePromise = client.mongoDB.distinct.distinct('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource distinct', () => runTests(client));
describe('resource distinct (tree shakable, base)', () => runTests(partialClient));
describe('resource distinct (tree shakable, subresource)', () => runTests(parentPartialClient));
