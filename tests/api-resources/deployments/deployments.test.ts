// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDeployments } from '@vaif/client/resources/deployments/deployments';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseDeployments],
});

const runTests = (client: PartialVaif<{ deployments: BaseDeployments }>) => {
  test('retrieve', async () => {
    const responsePromise = client.deployments.retrieve('deploymentId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource deployments', () => runTests(client));
describe('resource deployments (tree shakable, base)', () => runTests(partialClient));
