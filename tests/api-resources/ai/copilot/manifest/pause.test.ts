// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Manifest } from '@vaif/client/resources/ai/copilot/manifest/manifest';
import { BasePause } from '@vaif/client/resources/ai/copilot/manifest/pause';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePause],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Manifest],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { manifest: { pause: BasePause } } } }>) => {
  test('pause', async () => {
    const responsePromise = client.ai.copilot.manifest.pause.pause('manifestId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource pause', () => runTests(client));
describe('resource pause (tree shakable, base)', () => runTests(partialClient));
describe('resource pause (tree shakable, subresource)', () => runTests(parentPartialClient));
