// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Infrastructure } from '@vaif/client/resources/projects/infrastructure/infrastructure';
import { BaseUpgradeOptions } from '@vaif/client/resources/projects/infrastructure/upgrade-options';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseUpgradeOptions],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Infrastructure],
});

const runTests = (client: PartialVaif<{ projects: { infrastructure: { upgradeOptions: BaseUpgradeOptions } } }>) => {
  test('getUpgradeOptions: only required params', async () => {
    const responsePromise = client.projects.infrastructure.upgradeOptions.getUpgradeOptions('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getUpgradeOptions: required and optional params', async () => {
    const response = await client.projects.infrastructure.upgradeOptions.getUpgradeOptions('instanceId', { projectId: 'projectId' });
  });
};
describe('resource upgradeOptions', () => runTests(client));
describe('resource upgradeOptions (tree shakable, base)', () => runTests(partialClient));
describe('resource upgradeOptions (tree shakable, subresource)', () => runTests(parentPartialClient));
