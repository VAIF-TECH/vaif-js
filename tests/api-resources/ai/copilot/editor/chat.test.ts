// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseChat } from '@vaif/client/resources/ai/copilot/editor/chat';
import { Editor } from '@vaif/client/resources/ai/copilot/editor/editor';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseChat],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Editor],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { editor: { chat: BaseChat } } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.ai.copilot.editor.chat.create({ message: 'x', projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.ai.copilot.editor.chat.create({
    message: 'x',
    projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    files: [{ content: 'content', path: 'path' }],
    selectedFile: 'selectedFile',
    selectedRange: { endLine: 0, startLine: 0 },
    sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
  });
  });
};
describe('resource chat', () => runTests(client));
describe('resource chat (tree shakable, base)', () => runTests(partialClient));
describe('resource chat (tree shakable, subresource)', () => runTests(parentPartialClient));
