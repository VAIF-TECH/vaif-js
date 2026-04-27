// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLinkedAccounts } from '@vaif/client/resources/auth/me/linked-accounts';
import { Me } from '@vaif/client/resources/auth/me/me';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseLinkedAccounts],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Me],
});

const runTests = (client: PartialVaif<{ auth: { me: { linkedAccounts: BaseLinkedAccounts } } }>) => {
  test('list', async () => {
    const responsePromise = client.auth.me.linkedAccounts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.auth.me.linkedAccounts.delete('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource linkedAccounts', () => runTests(client));
describe('resource linkedAccounts (tree shakable, base)', () => runTests(partialClient));
describe('resource linkedAccounts (tree shakable, subresource)', () => runTests(parentPartialClient));
