// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Project } from '@vaif/client/resources/integrations/analytics/project/project';
import { BaseStats } from '@vaif/client/resources/integrations/analytics/project/stats';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseStats],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Project],
});

const runTests = (
  client: PartialVaif<{ integrations: { analytics: { project: { stats: BaseStats } } } }>,
) => {
  test('getStats', async () => {
    const responsePromise = client.integrations.analytics.project.stats.getStats('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource stats', () => runTests(client));
describe('resource stats (tree shakable, base)', () => runTests(partialClient));
describe('resource stats (tree shakable, subresource)', () => runTests(parentPartialClient));
