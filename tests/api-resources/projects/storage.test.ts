// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Projects } from '@vaif/client/resources/projects/projects';
import { BaseStorage } from '@vaif/client/resources/projects/storage';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseStorage],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Projects],
});

const runTests = (client: PartialVaif<{ projects: { storage: BaseStorage } }>) => {
  test('getSettings', async () => {
    const responsePromise = client.projects.storage.getSettings('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('settings', async () => {
    const responsePromise = client.projects.storage.settings('projectId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource storage', () => runTests(client));
describe('resource storage (tree shakable, base)', () => runTests(partialClient));
describe('resource storage (tree shakable, subresource)', () => runTests(parentPartialClient));
