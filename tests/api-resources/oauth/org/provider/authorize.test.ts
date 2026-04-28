// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAuthorize } from '@vaif/client/resources/oauth/org/provider/authorize';
import { Provider } from '@vaif/client/resources/oauth/org/provider/provider';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAuthorize],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Provider],
});

const runTests = (client: PartialVaif<{ oauth: { org: { provider: { authorize: BaseAuthorize } } } }>) => {
  test('getAuthorize: only required params', async () => {
    const responsePromise = client.oauth.org.provider.authorize.getAuthorize('x', {
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAuthorize: required and optional params', async () => {
    const response = await client.oauth.org.provider.authorize.getAuthorize('x', {
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
};
describe('resource authorize', () => runTests(client));
describe('resource authorize (tree shakable, base)', () => runTests(partialClient));
describe('resource authorize (tree shakable, subresource)', () => runTests(parentPartialClient));
