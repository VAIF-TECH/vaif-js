// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Deployments } from '@vaif/client/resources/deployments/deployments';
import { BaseTokens } from '@vaif/client/resources/deployments/tokens/tokens';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseTokens],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Deployments],
});

const runTests = (client: PartialVaif<{ deployments: { tokens: BaseTokens } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.deployments.tokens.create({ envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.deployments.tokens.create({ envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });
};
describe('resource tokens', () => runTests(client));
describe('resource tokens (tree shakable, base)', () => runTests(partialClient));
describe('resource tokens (tree shakable, subresource)', () => runTests(parentPartialClient));
