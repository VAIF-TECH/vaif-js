// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCallback } from '@vaif/client/resources/github/oauth/callback';
import { OAuth } from '@vaif/client/resources/github/oauth/oauth';

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

const runTests = (client: PartialVaif<{ github: { oauth: { callback: BaseCallback } } }>) => {
  test('list', async () => {
    const responsePromise = client.github.oauth.callback.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource callback', () => runTests(client));
describe('resource callback (tree shakable, base)', () => runTests(partialClient));
describe('resource callback (tree shakable, subresource)', () => runTests(parentPartialClient));
