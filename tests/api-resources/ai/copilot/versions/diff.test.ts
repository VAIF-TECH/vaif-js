// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDiff } from '@vaif/client/resources/ai/copilot/versions/diff';
import { Versions } from '@vaif/client/resources/ai/copilot/versions/versions';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDiff],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Versions],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { versions: { diff: BaseDiff } } } }>) => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.ai.copilot.versions.diff.retrieve('compareVersionId', {
      versionId: 'versionId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.ai.copilot.versions.diff.retrieve('compareVersionId', {
      versionId: 'versionId',
    });
  });
};
describe('resource diff', () => runTests(client));
describe('resource diff (tree shakable, base)', () => runTests(partialClient));
describe('resource diff (tree shakable, subresource)', () => runTests(parentPartialClient));
