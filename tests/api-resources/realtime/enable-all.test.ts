// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEnableAll } from '@vaif/client/resources/realtime/enable-all';
import { Realtime } from '@vaif/client/resources/realtime/realtime';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseEnableAll],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Realtime],
});

const runTests = (client: PartialVaif<{ realtime: { enableAll: BaseEnableAll } }>) => {
  test('create', async () => {
    const responsePromise = client.realtime.enableAll.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource enableAll', () => runTests(client));
describe('resource enableAll (tree shakable, base)', () => runTests(partialClient));
describe('resource enableAll (tree shakable, subresource)', () => runTests(parentPartialClient));
