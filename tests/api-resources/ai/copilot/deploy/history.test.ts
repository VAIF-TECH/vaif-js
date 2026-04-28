// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Deploy } from '@vaif/client/resources/ai/copilot/deploy/deploy';
import { BaseHistory } from '@vaif/client/resources/ai/copilot/deploy/history';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseHistory],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Deploy],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { deploy: { history: BaseHistory } } } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.ai.copilot.deploy.history.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.copilot.deploy.history.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          limit: 1,
          offset: 0,
          status: 'success',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Vaif.NotFoundError);
  });
};
describe('resource history', () => runTests(client));
describe('resource history (tree shakable, base)', () => runTests(partialClient));
describe('resource history (tree shakable, subresource)', () => runTests(parentPartialClient));
