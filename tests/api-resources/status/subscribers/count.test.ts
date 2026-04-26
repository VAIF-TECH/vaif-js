// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCount } from '@vaif/client/resources/status/subscribers/count';
import { Subscribers } from '@vaif/client/resources/status/subscribers/subscribers';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCount],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Subscribers],
});

const runTests = (client: PartialVaif<{ status: { subscribers: { count: BaseCount } } }>) => {
  test('list', async () => {
    const responsePromise = client.status.subscribers.count.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource count', () => runTests(client));
describe('resource count (tree shakable, base)', () => runTests(partialClient));
describe('resource count (tree shakable, subresource)', () => runTests(parentPartialClient));
