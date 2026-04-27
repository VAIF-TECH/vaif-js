// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Environments } from '@vaif/client/resources/projects/environments/environments';
import { BaseVerifyCname } from '@vaif/client/resources/projects/environments/verify-cname';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseVerifyCname],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Environments],
});

const runTests = (client: PartialVaif<{ projects: { environments: { verifyCname: BaseVerifyCname } } }>) => {
  test('verifyCname: only required params', async () => {
    const responsePromise = client.projects.environments.verifyCname.verifyCname('envId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verifyCname: required and optional params', async () => {
    const response = await client.projects.environments.verifyCname.verifyCname('envId', { projectId: 'projectId' });
  });
};
describe('resource verifyCname', () => runTests(client));
describe('resource verifyCname (tree shakable, base)', () => runTests(partialClient));
describe('resource verifyCname (tree shakable, subresource)', () => runTests(parentPartialClient));
