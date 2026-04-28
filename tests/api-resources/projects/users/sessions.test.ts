// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSessions } from '@vaif/client/resources/projects/users/sessions';
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
  resources: [BaseSessions],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Users],
});

const runTests = (client: PartialVaif<{ projects: { users: { sessions: BaseSessions } } }>) => {
  test('delete: only required params', async () => {
    const responsePromise = client.projects.users.sessions.delete('sessionId', {
      projectId: 'projectId',
      userId: 'userId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.projects.users.sessions.delete('sessionId', {
      projectId: 'projectId',
      userId: 'userId',
    });
  });

  test('getSessions: only required params', async () => {
    const responsePromise = client.projects.users.sessions.getSessions('userId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSessions: required and optional params', async () => {
    const response = await client.projects.users.sessions.getSessions('userId', { projectId: 'projectId' });
  });

  test('revokeAll: only required params', async () => {
    const responsePromise = client.projects.users.sessions.revokeAll('userId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revokeAll: required and optional params', async () => {
    const response = await client.projects.users.sessions.revokeAll('userId', { projectId: 'projectId' });
  });
};
describe('resource sessions', () => runTests(client));
describe('resource sessions (tree shakable, base)', () => runTests(partialClient));
describe('resource sessions (tree shakable, subresource)', () => runTests(parentPartialClient));
