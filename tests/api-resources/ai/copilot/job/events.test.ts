// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEvents } from '@vaif/client/resources/ai/copilot/job/events';
import { Job } from '@vaif/client/resources/ai/copilot/job/job';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseEvents],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Job],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { job: { events: BaseEvents } } } }>) => {
  test('getEvents', async () => {
    const responsePromise = client.ai.copilot.job.events.getEvents('jobId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource events', () => runTests(client));
describe('resource events (tree shakable, base)', () => runTests(partialClient));
describe('resource events (tree shakable, subresource)', () => runTests(parentPartialClient));
