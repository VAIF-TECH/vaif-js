// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Logs } from '@vaif/client/resources/logs/logs';
import { BaseProject } from '@vaif/client/resources/logs/project/project';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseProject],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Logs],
});

const runTests = (client: PartialVaif<{ logs: { project: BaseProject } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.logs.project.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.logs.project.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { level: 'info', limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Vaif.NotFoundError);
  });
};
describe('resource project', () => runTests(client));
describe('resource project (tree shakable, base)', () => runTests(partialClient));
describe('resource project (tree shakable, subresource)', () => runTests(parentPartialClient));
