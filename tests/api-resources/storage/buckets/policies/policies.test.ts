// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Buckets } from '@vaif/client/resources/storage/buckets/buckets';
import { BasePolicies } from '@vaif/client/resources/storage/buckets/policies/policies';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BasePolicies],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Buckets],
});

const runTests = (client: PartialVaif<{ storage: { buckets: { policies: BasePolicies } } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.storage.buckets.policies.update('policyId', { bucketId: 'bucketId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.storage.buckets.policies.update('policyId', { bucketId: 'bucketId' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.storage.buckets.policies.delete('policyId', { bucketId: 'bucketId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.storage.buckets.policies.delete('policyId', { bucketId: 'bucketId' });
  });

  test('getPolicies', async () => {
    const responsePromise = client.storage.buckets.policies.getPolicies('bucketId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('policies', async () => {
    const responsePromise = client.storage.buckets.policies.policies('bucketId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource policies', () => runTests(client));
describe('resource policies (tree shakable, base)', () => runTests(partialClient));
describe('resource policies (tree shakable, subresource)', () => runTests(parentPartialClient));
