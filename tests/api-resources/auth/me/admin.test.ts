// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAdmin } from '@vaif/client/resources/auth/me/admin';
import { Me } from '@vaif/client/resources/auth/me/me';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseAdmin],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Me],
});

const runTests = (client: PartialVaif<{ auth: { me: { admin: BaseAdmin } } }>) => {
  test('list', async () => {
    const responsePromise = client.auth.me.admin.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource admin', () => runTests(client));
describe('resource admin (tree shakable, base)', () => runTests(partialClient));
describe('resource admin (tree shakable, subresource)', () => runTests(parentPartialClient));
