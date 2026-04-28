// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBreakdown } from '@vaif/client/resources/ai-usage/org/breakdown';
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
  resources: [BaseBreakdown],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ aiUsage: { org: { breakdown: BaseBreakdown } } }>) => {
  test('getBreakdown', async () => {
    const responsePromise = client.aiUsage.org.breakdown.getBreakdown('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource breakdown', () => runTests(client));
describe('resource breakdown (tree shakable, base)', () => runTests(partialClient));
describe('resource breakdown (tree shakable, subresource)', () => runTests(parentPartialClient));
