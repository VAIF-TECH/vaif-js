// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif-tech/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource complete', () => {
  test('complete: only required params', async () => {
    const responsePromise = client.storage.multipart.complete.complete('x', {
    bucketId: 'x',
    key: 'x',
    parts: [{ ETag: 'x', PartNumber: 1 }],
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await client.storage.multipart.complete.complete('x', {
    bucketId: 'x',
    key: 'x',
    parts: [{ ETag: 'x', PartNumber: 1 }],
  });
  });
});
