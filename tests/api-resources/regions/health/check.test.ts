// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCheck } from '@vaif/client/resources/regions/health/check';
import { Health } from '@vaif/client/resources/regions/health/health';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCheck],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Health],
});

const runTests = (client: PartialVaif<{ regions: { health: { check: BaseCheck } } }>) => {
  test('create', async () => {
    const responsePromise = client.regions.health.check.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource check', () => runTests(client));
describe('resource check (tree shakable, base)', () => runTests(partialClient));
describe('resource check (tree shakable, subresource)', () => runTests(parentPartialClient));
