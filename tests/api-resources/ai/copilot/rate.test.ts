// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Copilot } from '@vaif/client/resources/ai/copilot/copilot';
import { BaseRate } from '@vaif/client/resources/ai/copilot/rate';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRate],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Copilot],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { rate: BaseRate } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.ai.copilot.rate.create('messageId', { rating: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.ai.copilot.rate.create('messageId', {
      rating: 1,
      approved: true,
      feedback: 'feedback',
    });
  });
};
describe('resource rate', () => runTests(client));
describe('resource rate (tree shakable, base)', () => runTests(partialClient));
describe('resource rate (tree shakable, subresource)', () => runTests(parentPartialClient));
