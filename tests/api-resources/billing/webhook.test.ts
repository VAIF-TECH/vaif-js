// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from '@vaif/client/resources/billing/billing';
import { BaseWebhook } from '@vaif/client/resources/billing/webhook';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseWebhook],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (client: PartialVaif<{ billing: { webhook: BaseWebhook } }>) => {
  test('create', async () => {
    const responsePromise = client.billing.webhook.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource webhook', () => runTests(client));
describe('resource webhook (tree shakable, base)', () => runTests(partialClient));
describe('resource webhook (tree shakable, subresource)', () => runTests(parentPartialClient));
