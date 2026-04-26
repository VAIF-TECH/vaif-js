// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource chat', () => {
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
});
