// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Projects } from '@vaif/client/resources/projects/projects';
import { BaseAPIKeys } from '@vaif/client/resources/projects/api-keys/api-keys';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseAPIKeys],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Projects],
});

const runTests = (client: PartialVaif<{ projects: { apiKeys: BaseAPIKeys } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.projects.apiKeys.update('keyId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.projects.apiKeys.update('keyId', {
    projectId: 'projectId',
    expiresAt: '2019-12-27T18:11:19.117Z',
    name: 'name',
    scopes: ['crud'],
  });
  });

  test('apiKeys', async () => {
    const responsePromise = client.projects.apiKeys.apiKeys('projectId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAPIKeys', async () => {
    const responsePromise = client.projects.apiKeys.getAPIKeys('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource apiKeys', () => runTests(client));
describe('resource apiKeys (tree shakable, base)', () => runTests(partialClient));
describe('resource apiKeys (tree shakable, subresource)', () => runTests(parentPartialClient));
