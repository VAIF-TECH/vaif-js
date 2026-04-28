// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Org } from '@vaif/client/resources/billing/org/org';
import { BaseResume } from '@vaif/client/resources/billing/org/resume';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseResume],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ billing: { org: { resume: BaseResume } } }>) => {
  test('resume', async () => {
    const responsePromise = client.billing.org.resume.resume('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource resume', () => runTests(client));
describe('resource resume (tree shakable, base)', () => runTests(partialClient));
describe('resource resume (tree shakable, subresource)', () => runTests(parentPartialClient));
