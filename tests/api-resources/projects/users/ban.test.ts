// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBan } from '@vaif/client/resources/projects/users/ban';
import { Users } from '@vaif/client/resources/projects/users/users';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBan],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Users],
});

const runTests = (client: PartialVaif<{ projects: { users: { ban: BaseBan } } }>) => {
  test('ban: only required params', async () => {
    const responsePromise = client.projects.users.ban.ban('userId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ban: required and optional params', async () => {
    const response = await client.projects.users.ban.ban('userId', {
      projectId: 'projectId',
      reason: 'reason',
    });
  });
};
describe('resource ban', () => runTests(client));
describe('resource ban (tree shakable, base)', () => runTests(partialClient));
describe('resource ban (tree shakable, subresource)', () => runTests(parentPartialClient));
