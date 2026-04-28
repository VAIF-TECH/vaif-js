// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMaintenance } from '@vaif/client/resources/maintenance';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseMaintenance],
});

const runTests = (client: PartialVaif<{ maintenance: BaseMaintenance }>) => {
  test('list', async () => {
    const responsePromise = client.maintenance.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource maintenance', () => runTests(client));
describe('resource maintenance (tree shakable, base)', () => runTests(partialClient));
