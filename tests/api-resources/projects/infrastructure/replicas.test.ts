// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Infrastructure } from '@vaif/client/resources/projects/infrastructure/infrastructure';
import { BaseReplicas } from '@vaif/client/resources/projects/infrastructure/replicas';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseReplicas],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Infrastructure],
});

const runTests = (client: PartialVaif<{ projects: { infrastructure: { replicas: BaseReplicas } } }>) => {
  test('getReplicas: only required params', async () => {
    const responsePromise = client.projects.infrastructure.replicas.getReplicas('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getReplicas: required and optional params', async () => {
    const response = await client.projects.infrastructure.replicas.getReplicas('instanceId', { projectId: 'projectId' });
  });

  test('replica: only required params', async () => {
    const responsePromise = client.projects.infrastructure.replicas.replica('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('replica: required and optional params', async () => {
    const response = await client.projects.infrastructure.replicas.replica('instanceId', { projectId: 'projectId' });
  });
};
describe('resource replicas', () => runTests(client));
describe('resource replicas (tree shakable, base)', () => runTests(partialClient));
describe('resource replicas (tree shakable, subresource)', () => runTests(parentPartialClient));
