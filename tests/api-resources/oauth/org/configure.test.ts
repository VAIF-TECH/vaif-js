// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConfigure } from '@vaif/client/resources/oauth/org/configure';
import { Org } from '@vaif/client/resources/oauth/org/org';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseConfigure],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ oauth: { org: { configure: BaseConfigure } } }>) => {
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
};
describe('resource configure', () => runTests(client));
describe('resource configure (tree shakable, base)', () => runTests(partialClient));
describe('resource configure (tree shakable, subresource)', () => runTests(parentPartialClient));
