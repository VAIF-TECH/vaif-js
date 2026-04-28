// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAggregate } from '@vaif/client/resources/mongodb/aggregate';
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
  resources: [BaseAggregate],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MongoDB],
});

const runTests = (client: PartialVaif<{ mongoDB: { aggregate: BaseAggregate } }>) => {
  test('aggregate', async () => {
    const responsePromise = client.mongoDB.aggregate.aggregate('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cursor', async () => {
    const responsePromise = client.mongoDB.aggregate.cursor('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource aggregate', () => runTests(client));
describe('resource aggregate (tree shakable, base)', () => runTests(partialClient));
describe('resource aggregate (tree shakable, subresource)', () => runTests(parentPartialClient));
