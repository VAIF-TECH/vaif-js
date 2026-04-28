// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseStatus } from '@vaif/client/resources/status/status';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseStatus],
});

const runTests = (client: PartialVaif<{ status: BaseStatus }>) => {
  test('list', async () => {
    const responsePromise = client.status.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource status', () => runTests(client));
describe('resource status (tree shakable, base)', () => runTests(partialClient));
