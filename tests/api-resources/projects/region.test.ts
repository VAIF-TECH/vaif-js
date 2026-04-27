// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Projects } from '@vaif/client/resources/projects/projects';
import { BaseRegion } from '@vaif/client/resources/projects/region';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseRegion],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Projects],
});

const runTests = (client: PartialVaif<{ projects: { region: BaseRegion } }>) => {
  test('getRegion', async () => {
    const responsePromise = client.projects.region.getRegion('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('region: only required params', async () => {
    const responsePromise = client.projects.region.region('projectId', { regionKey: 'x', tenancyType: 'shared' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('region: required and optional params', async () => {
    const response = await client.projects.region.region('projectId', { regionKey: 'x', tenancyType: 'shared' });
  });
};
describe('resource region', () => runTests(client));
describe('resource region (tree shakable, base)', () => runTests(partialClient));
describe('resource region (tree shakable, subresource)', () => runTests(parentPartialClient));
