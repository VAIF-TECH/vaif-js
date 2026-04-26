// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource contacts', () => {
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
    const responsePromise = client.billing.org.contacts.contacts('orgId', { email: 'dev@stainless.com', name: 'x' });
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
});
