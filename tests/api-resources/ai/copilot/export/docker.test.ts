// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDocker } from '@vaif/client/resources/ai/copilot/export/docker';
import { Export } from '@vaif/client/resources/ai/copilot/export/export';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseDocker],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Export],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { export: { docker: BaseDocker } } } }>) => {
  test('create', async () => {
    const responsePromise = client.ai.copilot.export.docker.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource docker', () => runTests(client));
describe('resource docker (tree shakable, base)', () => runTests(partialClient));
describe('resource docker (tree shakable, subresource)', () => runTests(parentPartialClient));
