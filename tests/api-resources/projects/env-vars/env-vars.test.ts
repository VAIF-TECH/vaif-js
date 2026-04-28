// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Projects } from '@vaif/client/resources/projects/projects';
import { BaseEnvVars } from '@vaif/client/resources/projects/env-vars/env-vars';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseEnvVars],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Projects],
});

const runTests = (client: PartialVaif<{ projects: { envVars: BaseEnvVars } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.projects.envVars.update('envVarId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.projects.envVars.update('envVarId', { projectId: 'projectId' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.projects.envVars.delete('envVarId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.projects.envVars.delete('envVarId', { projectId: 'projectId' });
  });

  test('envVars', async () => {
    const responsePromise = client.projects.envVars.envVars('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getEnvVars', async () => {
    const responsePromise = client.projects.envVars.getEnvVars('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource envVars', () => runTests(client));
describe('resource envVars (tree shakable, base)', () => runTests(partialClient));
describe('resource envVars (tree shakable, subresource)', () => runTests(parentPartialClient));
