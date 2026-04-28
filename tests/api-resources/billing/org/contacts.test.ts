// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseContacts } from '@vaif/client/resources/billing/org/contacts';
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
  resources: [BaseContacts],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ billing: { org: { contacts: BaseContacts } } }>) => {
  test('delete: only required params', async () => {
    const responsePromise = client.billing.org.contacts.delete('contactId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.billing.org.contacts.delete('contactId', { orgId: 'orgId' });
  });

  test('contacts: only required params', async () => {
    const responsePromise = client.billing.org.contacts.contacts('orgId', {
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

  test('contacts: required and optional params', async () => {
    const response = await client.billing.org.contacts.contacts('orgId', {
      email: 'dev@stainless.com',
      name: 'x',
      phone: 'phone',
      receiveAlerts: true,
      receiveInvoices: true,
    });
  });

  test('getContacts', async () => {
    const responsePromise = client.billing.org.contacts.getContacts('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource contacts', () => runTests(client));
describe('resource contacts (tree shakable, base)', () => runTests(partialClient));
describe('resource contacts (tree shakable, subresource)', () => runTests(parentPartialClient));
