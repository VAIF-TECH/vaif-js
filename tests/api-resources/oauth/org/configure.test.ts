// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource configure', () => {
  test('configure: only required params', async () => {
    const responsePromise = client.oauth.org.configure.configure('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
    clientId: 'x',
    clientSecret: 'x',
    provider: 'google',
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

  test('configure: required and optional params', async () => {
    const response = await client.oauth.org.configure.configure('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
    clientId: 'x',
    clientSecret: 'x',
    provider: 'google',
    redirectUri: 'https://example.com',
  });
  });
});
