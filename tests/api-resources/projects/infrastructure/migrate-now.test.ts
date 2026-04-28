// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Infrastructure } from '@vaif/client/resources/projects/infrastructure/infrastructure';
import { BaseMigrateNow } from '@vaif/client/resources/projects/infrastructure/migrate-now';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseMigrateNow],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Infrastructure],
});

const runTests = (client: PartialVaif<{ projects: { infrastructure: { migrateNow: BaseMigrateNow } } }>) => {
  test('migrateNow: only required params', async () => {
    const responsePromise = client.projects.infrastructure.migrateNow.migrateNow('instanceId', {
      projectId: 'projectId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('migrateNow: required and optional params', async () => {
    const response = await client.projects.infrastructure.migrateNow.migrateNow('instanceId', {
      projectId: 'projectId',
    });
  });
};
describe('resource migrateNow', () => runTests(client));
describe('resource migrateNow (tree shakable, base)', () => runTests(partialClient));
describe('resource migrateNow (tree shakable, subresource)', () => runTests(parentPartialClient));
