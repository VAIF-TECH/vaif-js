// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from '@vaif/client/resources/billing/billing';
import { BasePlans } from '@vaif/client/resources/billing/plans';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePlans],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (client: PartialVaif<{ billing: { plans: BasePlans } }>) => {
  test('list', async () => {
    const responsePromise = client.billing.plans.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource plans', () => runTests(client));
describe('resource plans (tree shakable, base)', () => runTests(partialClient));
describe('resource plans (tree shakable, subresource)', () => runTests(parentPartialClient));
