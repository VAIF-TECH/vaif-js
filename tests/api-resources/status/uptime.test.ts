// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Status } from '@vaif/client/resources/status/status';
import { BaseUptime } from '@vaif/client/resources/status/uptime';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseUptime],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Status],
});

const runTests = (client: PartialVaif<{ status: { uptime: BaseUptime } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.status.uptime.retrieve('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource uptime', () => runTests(client));
describe('resource uptime (tree shakable, base)', () => runTests(partialClient));
describe('resource uptime (tree shakable, subresource)', () => runTests(parentPartialClient));
