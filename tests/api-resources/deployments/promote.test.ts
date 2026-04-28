// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Deployments } from '@vaif/client/resources/deployments/deployments';
import { BasePromote } from '@vaif/client/resources/deployments/promote';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePromote],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Deployments],
});

const runTests = (client: PartialVaif<{ deployments: { promote: BasePromote } }>) => {
  test('create', async () => {
    const responsePromise = client.deployments.promote.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource promote', () => runTests(client));
describe('resource promote (tree shakable, base)', () => runTests(partialClient));
describe('resource promote (tree shakable, subresource)', () => runTests(parentPartialClient));
