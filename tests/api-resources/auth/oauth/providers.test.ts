// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { OAuth } from '@vaif/client/resources/auth/oauth/oauth';
import { BaseProviders } from '@vaif/client/resources/auth/oauth/providers';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseProviders],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [OAuth],
});

const runTests = (client: PartialVaif<{ auth: { oauth: { providers: BaseProviders } } }>) => {
  test('list', async () => {
    const responsePromise = client.auth.oauth.providers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource providers', () => runTests(client));
describe('resource providers (tree shakable, base)', () => runTests(partialClient));
describe('resource providers (tree shakable, subresource)', () => runTests(parentPartialClient));
