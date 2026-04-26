// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Policies } from '@vaif/client/resources/storage/buckets/policies/policies';
import { BaseToggle } from '@vaif/client/resources/storage/buckets/policies/toggle';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseToggle],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Policies],
});

const runTests = (client: PartialVaif<{ storage: { buckets: { policies: { toggle: BaseToggle } } } }>) => {
  test('toggle: only required params', async () => {
    const responsePromise = client.storage.buckets.policies.toggle.toggle('policyId', { bucketId: 'bucketId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('toggle: required and optional params', async () => {
    const response = await client.storage.buckets.policies.toggle.toggle('policyId', { bucketId: 'bucketId' });
  });
};
describe('resource toggle', () => runTests(client));
describe('resource toggle (tree shakable, base)', () => runTests(partialClient));
describe('resource toggle (tree shakable, subresource)', () => runTests(parentPartialClient));
