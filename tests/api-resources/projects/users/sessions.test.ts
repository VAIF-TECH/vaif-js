// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif-tech/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource sessions', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.projects.users.sessions.delete('sessionId', { projectId: 'projectId', userId: 'userId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.projects.users.sessions.delete('sessionId', { projectId: 'projectId', userId: 'userId' });
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
});
