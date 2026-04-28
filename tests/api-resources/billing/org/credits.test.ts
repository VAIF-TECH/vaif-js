// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCredits } from '@vaif/client/resources/billing/org/credits';
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
  resources: [BaseCredits],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ billing: { org: { credits: BaseCredits } } }>) => {
  test('getTransactions', async () => {
    const responsePromise = client.billing.org.credits.getTransactions('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('purchase: only required params', async () => {
    const responsePromise = client.billing.org.credits.purchase('orgId', { packageId: 'credits_10' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('purchase: required and optional params', async () => {
    const response = await client.billing.org.credits.purchase('orgId', {
      packageId: 'credits_10',
      cancelUrl: 'https://example.com',
      successUrl: 'https://example.com',
    });
  });
};
describe('resource credits', () => runTests(client));
describe('resource credits (tree shakable, base)', () => runTests(partialClient));
describe('resource credits (tree shakable, subresource)', () => runTests(parentPartialClient));
