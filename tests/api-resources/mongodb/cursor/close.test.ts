// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseClose } from '@vaif/client/resources/mongodb/cursor/close';
import { Cursor } from '@vaif/client/resources/mongodb/cursor/cursor';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseClose],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cursor],
});

const runTests = (client: PartialVaif<{ mongoDB: { cursor: { close: BaseClose } } }>) => {
  test('close: only required params', async () => {
    const responsePromise = client.mongoDB.cursor.close.close('cursorId', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('close: required and optional params', async () => {
    const response = await client.mongoDB.cursor.close.close('cursorId', { collection: 'collection' });
  });
};
describe('resource close', () => runTests(client));
describe('resource close (tree shakable, base)', () => runTests(partialClient));
describe('resource close (tree shakable, subresource)', () => runTests(parentPartialClient));
