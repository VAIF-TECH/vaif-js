// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Auth } from '@vaif/client/resources/auth/auth';
import { BaseOAuth } from '@vaif/client/resources/auth/oauth/oauth';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseOAuth],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Auth],
});

const runTests = (client: PartialVaif<{ auth: { oauth: BaseOAuth } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.auth.oauth.retrieve('google');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.oauth.retrieve(
        'google',
        { mode: 'login', redirect: 'redirect' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Vaif.NotFoundError);
  });
};
describe('resource oauth', () => runTests(client));
describe('resource oauth (tree shakable, base)', () => runTests(partialClient));
describe('resource oauth (tree shakable, subresource)', () => runTests(parentPartialClient));
