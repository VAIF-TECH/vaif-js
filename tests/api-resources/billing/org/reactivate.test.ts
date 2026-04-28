// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Org } from '@vaif/client/resources/billing/org/org';
import { BaseReactivate } from '@vaif/client/resources/billing/org/reactivate';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseReactivate],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ billing: { org: { reactivate: BaseReactivate } } }>) => {
  test('reactivate', async () => {
    const responsePromise = client.billing.org.reactivate.reactivate('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource reactivate', () => runTests(client));
describe('resource reactivate (tree shakable, base)', () => runTests(partialClient));
describe('resource reactivate (tree shakable, subresource)', () => runTests(parentPartialClient));
