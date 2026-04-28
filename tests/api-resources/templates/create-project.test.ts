// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCreateProject } from '@vaif/client/resources/templates/create-project';
import { Templates } from '@vaif/client/resources/templates/templates';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCreateProject],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Templates],
});

const runTests = (client: PartialVaif<{ templates: { createProject: BaseCreateProject } }>) => {
  test('create', async () => {
    const responsePromise = client.templates.createProject.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource createProject', () => runTests(client));
describe('resource createProject (tree shakable, base)', () => runTests(partialClient));
describe('resource createProject (tree shakable, subresource)', () => runTests(parentPartialClient));
