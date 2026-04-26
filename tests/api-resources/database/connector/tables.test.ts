// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Connector } from '@vaif/client/resources/database/connector/connector';
import { BaseTables } from '@vaif/client/resources/database/connector/tables';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseTables],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Connector],
});

const runTests = (client: PartialVaif<{ database: { connector: { tables: BaseTables } } }>) => {
  test('getTables', async () => {
    const responsePromise = client.database.connector.tables.getTables('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource tables', () => runTests(client));
describe('resource tables (tree shakable, base)', () => runTests(partialClient));
describe('resource tables (tree shakable, subresource)', () => runTests(parentPartialClient));
