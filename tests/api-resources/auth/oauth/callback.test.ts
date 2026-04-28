// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCallback } from '@vaif/client/resources/auth/oauth/callback';
import { OAuth } from '@vaif/client/resources/auth/oauth/oauth';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCallback],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [OAuth],
});

const runTests = (client: PartialVaif<{ auth: { oauth: { callback: BaseCallback } } }>) => {
  test('getCallback', async () => {
    const responsePromise = client.auth.oauth.callback.getCallback('google');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getCallback: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.oauth.callback.getCallback(
        'google',
        {
          code: 'code',
          error: 'error',
          error_description: 'error_description',
          state: 'state',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Vaif.NotFoundError);
  });
};
describe('resource callback', () => runTests(client));
describe('resource callback (tree shakable, base)', () => runTests(partialClient));
describe('resource callback (tree shakable, subresource)', () => runTests(parentPartialClient));
