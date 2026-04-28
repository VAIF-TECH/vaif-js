// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseChanges } from '@vaif/client/resources/schema-engine/changes';
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
  resources: [BaseChanges],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SchemaEngine],
});

const runTests = (client: PartialVaif<{ schemaEngine: { changes: BaseChanges } }>) => {
  test('getChanges', async () => {
    const responsePromise = client.schemaEngine.changes.getChanges('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource changes', () => runTests(client));
describe('resource changes (tree shakable, base)', () => runTests(partialClient));
describe('resource changes (tree shakable, subresource)', () => runTests(parentPartialClient));
