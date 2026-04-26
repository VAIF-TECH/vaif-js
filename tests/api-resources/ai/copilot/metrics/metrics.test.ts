// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Copilot } from '@vaif/client/resources/ai/copilot/copilot';
import { BaseMetrics } from '@vaif/client/resources/ai/copilot/metrics/metrics';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseMetrics],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Copilot],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { metrics: BaseMetrics } } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.ai.copilot.metrics.retrieve('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource metrics', () => runTests(client));
describe('resource metrics (tree shakable, base)', () => runTests(partialClient));
describe('resource metrics (tree shakable, subresource)', () => runTests(parentPartialClient));
