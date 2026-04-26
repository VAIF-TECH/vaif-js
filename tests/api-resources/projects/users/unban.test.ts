// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseUnban } from '@vaif/client/resources/projects/users/unban';
import { Users } from '@vaif/client/resources/projects/users/users';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseUnban],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Users],
});

const runTests = (client: PartialVaif<{ projects: { users: { unban: BaseUnban } } }>) => {
  test('unban: only required params', async () => {
    const responsePromise = client.projects.users.unban.unban('userId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unban: required and optional params', async () => {
    const response = await client.projects.users.unban.unban('userId', { projectId: 'projectId' });
  });
};
describe('resource unban', () => runTests(client));
describe('resource unban (tree shakable, base)', () => runTests(partialClient));
describe('resource unban (tree shakable, subresource)', () => runTests(parentPartialClient));
