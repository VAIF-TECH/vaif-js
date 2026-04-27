// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFindByID } from '@vaif/client/resources/mongodb/find-by-id';
import { MongoDB } from '@vaif/client/resources/mongodb/mongodb';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseFindByID],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [MongoDB],
});

const runTests = (client: PartialVaif<{ mongoDB: { findByID: BaseFindByID } }>) => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.mongoDB.findByID.retrieve('id', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.mongoDB.findByID.retrieve('id', { collection: 'collection' });
  });
};
describe('resource findByID', () => runTests(client));
describe('resource findByID (tree shakable, base)', () => runTests(partialClient));
describe('resource findByID (tree shakable, subresource)', () => runTests(parentPartialClient));
