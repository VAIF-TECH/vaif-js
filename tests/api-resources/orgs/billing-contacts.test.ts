// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif-tech/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource billingContacts', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.orgs.billingContacts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.orgs.billingContacts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('billingContacts: only required params', async () => {
    const responsePromise = client.orgs.billingContacts.billingContacts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('billingContacts: required and optional params', async () => {
    const response = await client.orgs.billingContacts.billingContacts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { email: 'dev@stainless.com', label: 'label' });
  });

  test('getBillingContacts', async () => {
    const responsePromise = client.orgs.billingContacts.getBillingContacts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
