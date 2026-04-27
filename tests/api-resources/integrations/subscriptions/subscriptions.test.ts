// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Integrations } from '@vaif/client/resources/integrations/integrations';
import { BaseSubscriptions } from '@vaif/client/resources/integrations/subscriptions/subscriptions';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseSubscriptions],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Integrations],
});

const runTests = (client: PartialVaif<{ integrations: { subscriptions: BaseSubscriptions } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.integrations.subscriptions.create({
    config: {},
    eventFilter: {},
    name: 'x',
    projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    type: 'webhook',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.integrations.subscriptions.create({
    config: {
    apiKey: 'apiKey',
    apiSecret: 'apiSecret',
    headers: { foo: 'string' },
    measurementId: 'measurementId',
    projectId: 'projectId',
    provider: 'provider',
    secret: 'secret',
    url: 'https://example.com',
  },
    eventFilter: { allow: ['string'] },
    name: 'x',
    projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    type: 'webhook',
    envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
  });
  });

  test('update', async () => {
    const responsePromise = client.integrations.subscriptions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.integrations.subscriptions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource subscriptions', () => runTests(client));
describe('resource subscriptions (tree shakable, base)', () => runTests(partialClient));
describe('resource subscriptions (tree shakable, subresource)', () => runTests(parentPartialClient));
