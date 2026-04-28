// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from '@vaif/client/resources/billing/billing';
import { BaseCheckout } from '@vaif/client/resources/billing/checkout/checkout';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCheckout],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (client: PartialVaif<{ billing: { checkout: BaseCheckout } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.billing.checkout.create({
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      plan: 'starter',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.billing.checkout.create({
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      plan: 'starter',
      cancelUrl: 'https://example.com',
      interval: 'monthly',
      promoCode: 'promoCode',
      successUrl: 'https://example.com',
    });
  });
};
describe('resource checkout', () => runTests(client));
describe('resource checkout (tree shakable, base)', () => runTests(partialClient));
describe('resource checkout (tree shakable, subresource)', () => runTests(parentPartialClient));
