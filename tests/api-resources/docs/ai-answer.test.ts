// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAIAnswer } from '@vaif/client/resources/docs/ai-answer';
import { Docs } from '@vaif/client/resources/docs/docs';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAIAnswer],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Docs],
});

const runTests = (client: PartialVaif<{ docs: { aiAnswer: BaseAIAnswer } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.docs.aiAnswer.create({ context: 'context', question: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.docs.aiAnswer.create({
      context: 'context',
      question: 'xxx',
      conversationHistory: [{ content: 'content', role: 'user' }],
    });
  });
};
describe('resource aiAnswer', () => runTests(client));
describe('resource aiAnswer (tree shakable, base)', () => runTests(partialClient));
describe('resource aiAnswer (tree shakable, subresource)', () => runTests(parentPartialClient));
