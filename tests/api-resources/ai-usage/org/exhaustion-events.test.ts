// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseExhaustionEvents } from '@vaif/client/resources/ai-usage/org/exhaustion-events';
import { Org } from '@vaif/client/resources/ai-usage/org/org';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseExhaustionEvents],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ aiUsage: { org: { exhaustionEvents: BaseExhaustionEvents } } }>) => {
  test('getExhaustionEvents', async () => {
    const responsePromise = client.aiUsage.org.exhaustionEvents.getExhaustionEvents('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource exhaustionEvents', () => runTests(client));
describe('resource exhaustionEvents (tree shakable, base)', () => runTests(partialClient));
describe('resource exhaustionEvents (tree shakable, subresource)', () => runTests(parentPartialClient));
