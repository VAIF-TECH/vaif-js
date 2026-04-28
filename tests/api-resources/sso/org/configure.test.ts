// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConfigure } from '@vaif/client/resources/sso/org/configure';
import { Org } from '@vaif/client/resources/sso/org/org';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseConfigure],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ sso: { org: { configure: BaseConfigure } } }>) => {
  test('configure', async () => {
    const responsePromise = client.sso.org.configure.configure('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource configure', () => runTests(client));
describe('resource configure (tree shakable, base)', () => runTests(partialClient));
describe('resource configure (tree shakable, subresource)', () => runTests(parentPartialClient));
