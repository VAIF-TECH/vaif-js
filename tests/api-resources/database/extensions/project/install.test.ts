// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseInstall } from '@vaif/client/resources/database/extensions/project/install';
import { Project } from '@vaif/client/resources/database/extensions/project/project';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseInstall],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Project],
});

const runTests = (client: PartialVaif<{ database: { extensions: { project: { install: BaseInstall } } } }>) => {
  test('install: only required params', async () => {
    const responsePromise = client.database.extensions.project.install.install('projectId', { extensionId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('install: required and optional params', async () => {
    const response = await client.database.extensions.project.install.install('projectId', {
    extensionId: 'x',
    config: { foo: 'bar' },
    envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
  });
  });
};
describe('resource install', () => runTests(client));
describe('resource install (tree shakable, base)', () => runTests(partialClient));
describe('resource install (tree shakable, subresource)', () => runTests(parentPartialClient));
