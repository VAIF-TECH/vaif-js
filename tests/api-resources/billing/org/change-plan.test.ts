// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseChangePlan } from '@vaif/client/resources/billing/org/change-plan';
import { Org } from '@vaif/client/resources/billing/org/org';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseChangePlan],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ billing: { org: { changePlan: BaseChangePlan } } }>) => {
  test('changePlan: only required params', async () => {
    const responsePromise = client.billing.org.changePlan.changePlan('orgId', { plan: 'starter' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changePlan: required and optional params', async () => {
    const response = await client.billing.org.changePlan.changePlan('orgId', {
      plan: 'starter',
      interval: 'monthly',
    });
  });
};
describe('resource changePlan', () => runTests(client));
describe('resource changePlan (tree shakable, base)', () => runTests(partialClient));
describe('resource changePlan (tree shakable, subresource)', () => runTests(parentPartialClient));
