// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deploy', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.copilot.deploy.create({
      projectId: 'x',
      resources: [
        {
          id: 'x',
          content: 'content',
          path: 'path',
          type: 'schema',
        },
      ],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.ai.copilot.deploy.create({
      projectId: 'x',
      resources: [
        {
          id: 'x',
          content: 'content',
          path: 'path',
          type: 'schema',
          name: 'name',
        },
      ],
      dryRun: true,
      sessionId: 'sessionId',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ai.copilot.deploy.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.copilot.deploy.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          limit: 1,
          offset: 0,
          status: 'success',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VaifStudio.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('rollback', async () => {
    const responsePromise = client.ai.copilot.deploy.rollback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
