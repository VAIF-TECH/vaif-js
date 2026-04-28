// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Audit } from '@vaif/client/resources/audit/audit';
import { BaseOrg } from '@vaif/client/resources/audit/org';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseOrg],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Audit],
});

const runTests = (client: PartialVaif<{ audit: { org: BaseOrg } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.audit.org.retrieve('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource org', () => runTests(client));
describe('resource org (tree shakable, base)', () => runTests(partialClient));
describe('resource org (tree shakable, subresource)', () => runTests(parentPartialClient));
