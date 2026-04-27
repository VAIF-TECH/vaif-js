// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Copilot } from '@vaif/client/resources/ai/copilot/copilot';
import { BaseFeedback } from '@vaif/client/resources/ai/copilot/feedback';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseFeedback],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Copilot],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { feedback: BaseFeedback } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.ai.copilot.feedback.create({
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

  test('create: required and optional params', async () => {
    const response = await client.ai.copilot.feedback.create({
    feedbackType: 'correct',
    messageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    correctedIntent: 'correctedIntent',
    userFeedback: 'userFeedback',
  });
  });
};
describe('resource feedback', () => runTests(client));
describe('resource feedback (tree shakable, base)', () => runTests(partialClient));
describe('resource feedback (tree shakable, subresource)', () => runTests(parentPartialClient));
