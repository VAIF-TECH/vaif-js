// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metrics } from '@vaif/client/resources/metrics/metrics';
import { BaseProject } from '@vaif/client/resources/metrics/project/project';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseProject],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Metrics],
});

const runTests = (client: PartialVaif<{ metrics: { project: BaseProject } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.metrics.project.retrieve('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource project', () => runTests(client));
describe('resource project (tree shakable, base)', () => runTests(partialClient));
describe('resource project (tree shakable, subresource)', () => runTests(parentPartialClient));
