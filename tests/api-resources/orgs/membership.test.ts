// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMembership } from '@vaif/client/resources/orgs/membership';
import { Orgs } from '@vaif/client/resources/orgs/orgs';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseMembership],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Orgs],
});

const runTests = (client: PartialVaif<{ orgs: { membership: BaseMembership } }>) => {
  test('getMembership', async () => {
    const responsePromise = client.orgs.membership.getMembership('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource membership', () => runTests(client));
describe('resource membership (tree shakable, base)', () => runTests(partialClient));
describe('resource membership (tree shakable, subresource)', () => runTests(parentPartialClient));
