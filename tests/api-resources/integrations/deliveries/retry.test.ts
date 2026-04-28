// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Deliveries } from '@vaif/client/resources/integrations/deliveries/deliveries';
import { BaseRetry } from '@vaif/client/resources/integrations/deliveries/retry';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRetry],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Deliveries],
});

const runTests = (client: PartialVaif<{ integrations: { deliveries: { retry: BaseRetry } } }>) => {
  test('retry', async () => {
    const responsePromise = client.integrations.deliveries.retry.retry(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource retry', () => runTests(client));
describe('resource retry (tree shakable, base)', () => runTests(partialClient));
describe('resource retry (tree shakable, subresource)', () => runTests(parentPartialClient));
