// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif-tech/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource buckets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.storage.buckets.create({ name: 'name', projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.storage.buckets.create({
    name: 'name',
    projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    allowedMimeTypes: ['string'],
    corsOrigins: ['string'],
    envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    fileSizeLimit: 1,
    public: true,
  });
  });

  test('list', async () => {
    const responsePromise = client.storage.buckets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
