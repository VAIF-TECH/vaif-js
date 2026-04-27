// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cursor } from '@vaif/client/resources/mongodb/cursor/cursor';
import { BaseNext } from '@vaif/client/resources/mongodb/cursor/next';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseNext],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Cursor],
});

const runTests = (client: PartialVaif<{ mongoDB: { cursor: { next: BaseNext } } }>) => {
  test('next: only required params', async () => {
    const responsePromise = client.mongoDB.cursor.next.next('cursorId', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('next: required and optional params', async () => {
    const response = await client.mongoDB.cursor.next.next('cursorId', { collection: 'collection' });
  });
};
describe('resource next', () => runTests(client));
describe('resource next (tree shakable, base)', () => runTests(partialClient));
describe('resource next (tree shakable, subresource)', () => runTests(parentPartialClient));
