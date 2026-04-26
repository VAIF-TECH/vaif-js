// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauthApps', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.auth.oauthApps.update('provider', {
      projectId: 'projectId',
      clientId: 'x',
      clientSecret: 'x',
      redirectUri: 'https://example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.projects.auth.oauthApps.update('provider', {
      projectId: 'projectId',
      clientId: 'x',
      clientSecret: 'x',
      redirectUri: 'https://example.com',
      enabled: true,
      scopes: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.auth.oauthApps.delete('provider', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.projects.auth.oauthApps.delete('provider', { projectId: 'projectId' });
  });

  // Mock server tests are disabled
  test.skip('retrieveOAuthApps', async () => {
    const responsePromise = client.projects.auth.oauthApps.retrieveOAuthApps('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
