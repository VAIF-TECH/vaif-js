// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Environments } from '@vaif/client/resources/projects/environments/environments';
import { BaseVerifyDomain } from '@vaif/client/resources/projects/environments/verify-domain';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseVerifyDomain],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Environments],
});

const runTests = (client: PartialVaif<{ projects: { environments: { verifyDomain: BaseVerifyDomain } } }>) => {
  test('verifyDomain: only required params', async () => {
    const responsePromise = client.projects.environments.verifyDomain.verifyDomain('envId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verifyDomain: required and optional params', async () => {
    const response = await client.projects.environments.verifyDomain.verifyDomain('envId', { projectId: 'projectId' });
  });
};
describe('resource verifyDomain', () => runTests(client));
describe('resource verifyDomain (tree shakable, base)', () => runTests(partialClient));
describe('resource verifyDomain (tree shakable, subresource)', () => runTests(parentPartialClient));
