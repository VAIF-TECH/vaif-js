// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif-tech/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource credits', () => {
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
});
