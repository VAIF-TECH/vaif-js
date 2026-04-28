// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseOverview } from '@vaif/client/resources/metrics/project/overview';
import { Project } from '@vaif/client/resources/metrics/project/project';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseOverview],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Project],
});

const runTests = (client: PartialVaif<{ metrics: { project: { overview: BaseOverview } } }>) => {
  test('getOverview', async () => {
    const responsePromise = client.metrics.project.overview.getOverview('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource overview', () => runTests(client));
describe('resource overview (tree shakable, base)', () => runTests(partialClient));
describe('resource overview (tree shakable, subresource)', () => runTests(parentPartialClient));
