// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Invoices } from '@vaif/client/resources/billing/org/invoices/invoices';
import { BasePdf } from '@vaif/client/resources/billing/org/invoices/pdf';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePdf],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Invoices],
});

const runTests = (client: PartialVaif<{ billing: { org: { invoices: { pdf: BasePdf } } } }>) => {
  test('getPdf: only required params', async () => {
    const responsePromise = client.billing.org.invoices.pdf.getPdf('invoiceId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPdf: required and optional params', async () => {
    const response = await client.billing.org.invoices.pdf.getPdf('invoiceId', { orgId: 'orgId' });
  });
};
describe('resource pdf', () => runTests(client));
describe('resource pdf (tree shakable, base)', () => runTests(partialClient));
describe('resource pdf (tree shakable, subresource)', () => runTests(parentPartialClient));
