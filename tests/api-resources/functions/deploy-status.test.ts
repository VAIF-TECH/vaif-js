// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDeployStatus } from '@vaif/client/resources/functions/deploy-status';
import { Functions } from '@vaif/client/resources/functions/functions';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDeployStatus],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Functions],
});

const runTests = (client: PartialVaif<{ functions: { deployStatus: BaseDeployStatus } }>) => {
  test('getDeployStatus', async () => {
    const responsePromise = client.functions.deployStatus.getDeployStatus('functionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource deployStatus', () => runTests(client));
describe('resource deployStatus (tree shakable, base)', () => runTests(partialClient));
describe('resource deployStatus (tree shakable, subresource)', () => runTests(parentPartialClient));
