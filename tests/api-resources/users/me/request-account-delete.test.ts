// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Me } from '@vaif/client/resources/users/me/me';
import { BaseRequestAccountDelete } from '@vaif/client/resources/users/me/request-account-delete';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRequestAccountDelete],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Me],
});

const runTests = (
  client: PartialVaif<{ users: { me: { requestAccountDelete: BaseRequestAccountDelete } } }>,
) => {
  test('create', async () => {
    const responsePromise = client.users.me.requestAccountDelete.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource requestAccountDelete', () => runTests(client));
describe('resource requestAccountDelete (tree shakable, base)', () => runTests(partialClient));
describe('resource requestAccountDelete (tree shakable, subresource)', () => runTests(parentPartialClient));
