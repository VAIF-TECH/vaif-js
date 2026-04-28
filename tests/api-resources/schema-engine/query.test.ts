// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseQuery } from '@vaif/client/resources/schema-engine/query';
import { SchemaEngine } from '@vaif/client/resources/schema-engine/schema-engine';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseQuery],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SchemaEngine],
});

const runTests = (client: PartialVaif<{ schemaEngine: { query: BaseQuery } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.schemaEngine.query.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sql: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.schemaEngine.query.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sql: 'x',
      params: [{}],
    });
  });
};
describe('resource query', () => runTests(client));
describe('resource query (tree shakable, base)', () => runTests(partialClient));
describe('resource query (tree shakable, subresource)', () => runTests(parentPartialClient));
