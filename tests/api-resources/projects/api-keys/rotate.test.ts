// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIKeys } from '@vaif/client/resources/projects/api-keys/api-keys';
import { BaseRotate } from '@vaif/client/resources/projects/api-keys/rotate';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseRotate],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [APIKeys],
});

const runTests = (client: PartialVaif<{ projects: { apiKeys: { rotate: BaseRotate } } }>) => {
  test('rotate: only required params', async () => {
    const responsePromise = client.projects.apiKeys.rotate.rotate('keyId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rotate: required and optional params', async () => {
    const response = await client.projects.apiKeys.rotate.rotate('keyId', { projectId: 'projectId' });
  });
};
describe('resource rotate', () => runTests(client));
describe('resource rotate (tree shakable, base)', () => runTests(partialClient));
describe('resource rotate (tree shakable, subresource)', () => runTests(parentPartialClient));
