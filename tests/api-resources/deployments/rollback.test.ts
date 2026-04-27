// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Deployments } from '@vaif/client/resources/deployments/deployments';
import { BaseRollback } from '@vaif/client/resources/deployments/rollback';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseRollback],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Deployments],
});

const runTests = (client: PartialVaif<{ deployments: { rollback: BaseRollback } }>) => {
  test('rollback', async () => {
    const responsePromise = client.deployments.rollback.rollback('deploymentId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource rollback', () => runTests(client));
describe('resource rollback (tree shakable, base)', () => runTests(partialClient));
describe('resource rollback (tree shakable, subresource)', () => runTests(parentPartialClient));
