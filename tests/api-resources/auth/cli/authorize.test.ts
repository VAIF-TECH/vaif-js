// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAuthorize } from '@vaif/api/resources/auth/cli/authorize';
import { Cli } from '@vaif/api/resources/auth/cli/cli';

import Vaif from '@vaif/api';
import { createClient, type PartialVaif } from '@vaif/api/tree-shakable';

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
  resources: [Cli],
});

const runTests = (client: PartialVaif<{ auth: { cli: { authorize: BaseAuthorize } } }>) => {
  test('create', async () => {
    const responsePromise = client.auth.cli.authorize.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource authorize', () => runTests(client));
describe('resource authorize (tree shakable, base)', () => runTests(partialClient));
describe('resource authorize (tree shakable, subresource)', () => runTests(parentPartialClient));
