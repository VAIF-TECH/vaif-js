// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { PromoCodes } from '@vaif/client/resources/billing/promo-codes/promo-codes';
import { BaseValidate } from '@vaif/client/resources/billing/promo-codes/validate';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseValidate],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [PromoCodes],
});

const runTests = (client: PartialVaif<{ billing: { promoCodes: { validate: BaseValidate } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.billing.promoCodes.validate.create({ code: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.billing.promoCodes.validate.create({ code: 'x', plan: 'starter' });
  });
};
describe('resource validate', () => runTests(client));
describe('resource validate (tree shakable, base)', () => runTests(partialClient));
describe('resource validate (tree shakable, subresource)', () => runTests(parentPartialClient));
