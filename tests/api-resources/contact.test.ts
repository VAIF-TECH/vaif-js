// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource contact', () => {
  test('create: only required params', async () => {
    const responsePromise = client.contact.create({
    email: 'dev@stainless.com',
    message: 'x',
    name: 'x',
    subject: 'Sales Inquiry',
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
    const response = await client.contact.create({
    email: 'dev@stainless.com',
    message: 'x',
    name: 'x',
    subject: 'Sales Inquiry',
    company: 'company',
    website: 'website',
  });
  });
});
