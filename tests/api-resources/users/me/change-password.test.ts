// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseChangePassword } from '@vaif/client/resources/users/me/change-password';
import { Me } from '@vaif/client/resources/users/me/me';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseChangePassword],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Me],
});

const runTests = (client: PartialVaif<{ users: { me: { changePassword: BaseChangePassword } } }>) => {
  test('create', async () => {
    const responsePromise = client.users.me.changePassword.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource changePassword', () => runTests(client));
describe('resource changePassword (tree shakable, base)', () => runTests(partialClient));
describe('resource changePassword (tree shakable, subresource)', () => runTests(parentPartialClient));
