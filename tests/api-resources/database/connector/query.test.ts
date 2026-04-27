// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Connector } from '@vaif/client/resources/database/connector/connector';
import { BaseQuery } from '@vaif/client/resources/database/connector/query';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseQuery],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Connector],
});

const runTests = (client: PartialVaif<{ database: { connector: { query: BaseQuery } } }>) => {
  test('query: only required params', async () => {
    const responsePromise = client.database.connector.query.query('projectId', { table: 'x', wrapperId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.database.connector.query.query('projectId', {
    table: 'x',
    wrapperId: 'x',
    filters: { foo: 'bar' },
    limit: 1,
    offset: 0,
  });
  });
};
describe('resource query', () => runTests(client));
describe('resource query (tree shakable, base)', () => runTests(partialClient));
describe('resource query (tree shakable, subresource)', () => runTests(parentPartialClient));
