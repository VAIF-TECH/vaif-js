// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource copilot', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ai.copilot.retrieve('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.ai.copilot.update('messageId', { rating: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.ai.copilot.update('messageId', {
      rating: 1,
      approved: true,
      feedback: 'feedback',
    });
  });

  // Mock server tests are disabled
  test.skip('execute: only required params', async () => {
    const responsePromise = client.ai.copilot.execute({
      planId: 'planId',
      sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('execute: required and optional params', async () => {
    const response = await client.ai.copilot.execute({
      planId: 'planId',
      sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dryRun: true,
      stepIds: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('feedback: only required params', async () => {
    const responsePromise = client.ai.copilot.feedback({
      feedbackType: 'correct',
      messageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('feedback: required and optional params', async () => {
    const response = await client.ai.copilot.feedback({
      feedbackType: 'correct',
      messageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      correctedIntent: 'correctedIntent',
      userFeedback: 'userFeedback',
    });
  });
});
