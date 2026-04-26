// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource multipart', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.storage.multipart.create({ bucketId: 'x', key: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.storage.multipart.create({
      bucketId: 'x',
      key: 'x',
      contentType: 'contentType',
    });
  });

  // Mock server tests are disabled
  test.skip('abort: only required params', async () => {
    const responsePromise = client.storage.multipart.abort('x', { bucketId: 'x', key: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('abort: required and optional params', async () => {
    const response = await client.storage.multipart.abort('x', { bucketId: 'x', key: 'x' });
  });

  // Mock server tests are disabled
  test.skip('complete: only required params', async () => {
    const responsePromise = client.storage.multipart.complete('x', {
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

  // Mock server tests are disabled
  test.skip('complete: required and optional params', async () => {
    const response = await client.storage.multipart.complete('x', {
      bucketId: 'x',
      key: 'x',
      parts: [{ ETag: 'x', PartNumber: 1 }],
    });
  });

  // Mock server tests are disabled
  test.skip('getPartURL: only required params', async () => {
    const responsePromise = client.storage.multipart.getPartURL('x', {
      bucketId: 'x',
      key: 'x',
      partNumber: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPartURL: required and optional params', async () => {
    const response = await client.storage.multipart.getPartURL('x', {
      bucketId: 'x',
      key: 'x',
      partNumber: 1,
    });
  });
});
