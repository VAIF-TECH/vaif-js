// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRss } from '@vaif/client/resources/status/rss';
import { Status } from '@vaif/client/resources/status/status';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRss],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Status],
});

const runTests = (client: PartialVaif<{ status: { rss: BaseRss } }>) => {
  test('list', async () => {
    const responsePromise = client.status.rss.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource rss', () => runTests(client));
describe('resource rss (tree shakable, base)', () => runTests(partialClient));
describe('resource rss (tree shakable, subresource)', () => runTests(parentPartialClient));
