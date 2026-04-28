// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Environments } from '@vaif/client/resources/projects/environments/environments';
import { BaseProvisionSsl } from '@vaif/client/resources/projects/environments/provision-ssl';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseProvisionSsl],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Environments],
});

const runTests = (
  client: PartialVaif<{ projects: { environments: { provisionSsl: BaseProvisionSsl } } }>,
) => {
  test('provisionSsl: only required params', async () => {
    const responsePromise = client.projects.environments.provisionSsl.provisionSsl('envId', {
      projectId: 'projectId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('provisionSsl: required and optional params', async () => {
    const response = await client.projects.environments.provisionSsl.provisionSsl('envId', {
      projectId: 'projectId',
    });
  });
};
describe('resource provisionSsl', () => runTests(client));
describe('resource provisionSsl (tree shakable, base)', () => runTests(partialClient));
describe('resource provisionSsl (tree shakable, subresource)', () => runTests(parentPartialClient));
