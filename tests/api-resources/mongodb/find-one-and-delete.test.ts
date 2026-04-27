// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFindOneAndDelete } from '@vaif/client/resources/mongodb/find-one-and-delete';
import { MongoDB } from '@vaif/client/resources/mongodb/mongodb';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseFindOneAndDelete],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [MongoDB],
});

const runTests = (client: PartialVaif<{ mongoDB: { findOneAndDelete: BaseFindOneAndDelete } }>) => {
  test('findOneAndDelete', async () => {
    const responsePromise = client.mongoDB.findOneAndDelete.findOneAndDelete('collection');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource findOneAndDelete', () => runTests(client));
describe('resource findOneAndDelete (tree shakable, base)', () => runTests(partialClient));
describe('resource findOneAndDelete (tree shakable, subresource)', () => runTests(parentPartialClient));
