// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Auth } from '@vaif/client/resources/auth/auth';
import { BaseLogout } from '@vaif/client/resources/auth/logout';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseLogout],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Auth],
});

const runTests = (client: PartialVaif<{ auth: { logout: BaseLogout } }>) => {
  test('create', async () => {
    const responsePromise = client.auth.logout.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource logout', () => runTests(client));
describe('resource logout (tree shakable, base)', () => runTests(partialClient));
describe('resource logout (tree shakable, subresource)', () => runTests(parentPartialClient));
