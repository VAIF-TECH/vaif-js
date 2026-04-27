// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Checkout } from '@vaif/client/resources/billing/checkout/checkout';
import { BaseVerify } from '@vaif/client/resources/billing/checkout/verify';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseVerify],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Checkout],
});

const runTests = (client: PartialVaif<{ billing: { checkout: { verify: BaseVerify } } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.billing.checkout.verify.retrieve('sessionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource verify', () => runTests(client));
describe('resource verify (tree shakable, base)', () => runTests(partialClient));
describe('resource verify (tree shakable, subresource)', () => runTests(parentPartialClient));
