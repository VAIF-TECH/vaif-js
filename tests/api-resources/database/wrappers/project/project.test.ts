// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Wrappers } from '@vaif/client/resources/database/wrappers/wrappers';
import { BaseProject } from '@vaif/client/resources/database/wrappers/project/project';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseProject],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Wrappers],
});

const runTests = (client: PartialVaif<{ database: { wrappers: { project: BaseProject } } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.database.wrappers.project.retrieve('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.database.wrappers.project.update('wrapperId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.database.wrappers.project.update('wrapperId', {
      projectId: 'projectId',
      config: { foo: 'bar' },
      enabledTables: ['string'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.database.wrappers.project.delete('wrapperId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.database.wrappers.project.delete('wrapperId', { projectId: 'projectId' });
  });
};
describe('resource project', () => runTests(client));
describe('resource project (tree shakable, base)', () => runTests(partialClient));
describe('resource project (tree shakable, subresource)', () => runTests(parentPartialClient));
