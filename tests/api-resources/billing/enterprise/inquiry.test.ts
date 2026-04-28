// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Enterprise } from '@vaif/client/resources/billing/enterprise/enterprise';
import { BaseInquiry } from '@vaif/client/resources/billing/enterprise/inquiry';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseInquiry],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Enterprise],
});

const runTests = (client: PartialVaif<{ billing: { enterprise: { inquiry: BaseInquiry } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.billing.enterprise.inquiry.create({
      company: 'x',
      email: 'dev@stainless.com',
      name: 'x',
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
    const response = await client.billing.enterprise.inquiry.create({
      company: 'x',
      email: 'dev@stainless.com',
      name: 'x',
      message: 'message',
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      phone: 'phone',
      teamSize: '1-10',
    });
  });
};
describe('resource inquiry', () => runTests(client));
describe('resource inquiry (tree shakable, base)', () => runTests(partialClient));
describe('resource inquiry (tree shakable, subresource)', () => runTests(parentPartialClient));
