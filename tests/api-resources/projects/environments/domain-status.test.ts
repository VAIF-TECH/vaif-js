// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDomainStatus } from '@vaif/client/resources/projects/environments/domain-status';
import { Environments } from '@vaif/client/resources/projects/environments/environments';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDomainStatus],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Environments],
});

const runTests = (
  client: PartialVaif<{ projects: { environments: { domainStatus: BaseDomainStatus } } }>,
) => {
  test('getDomainStatus: only required params', async () => {
    const responsePromise = client.projects.environments.domainStatus.getDomainStatus('envId', {
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

  test('getDomainStatus: required and optional params', async () => {
    const response = await client.projects.environments.domainStatus.getDomainStatus('envId', {
      projectId: 'projectId',
    });
  });
};
describe('resource domainStatus', () => runTests(client));
describe('resource domainStatus (tree shakable, base)', () => runTests(partialClient));
describe('resource domainStatus (tree shakable, subresource)', () => runTests(parentPartialClient));
