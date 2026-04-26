// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cursor', () => {
  // Mock server tests are disabled
  test.skip('close: only required params', async () => {
    const responsePromise = client.mongoDB.cursor.close('cursorId', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('close: required and optional params', async () => {
    const response = await client.mongoDB.cursor.close('cursorId', { collection: 'collection' });
  });

  // Mock server tests are disabled
  test.skip('next: only required params', async () => {
    const responsePromise = client.mongoDB.cursor.next('cursorId', { collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('next: required and optional params', async () => {
    const response = await client.mongoDB.cursor.next('cursorId', { collection: 'collection' });
  });
});
