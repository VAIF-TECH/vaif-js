// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRefunds } from '@vaif/client/resources/refunds/refunds';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseRefunds],
});

const runTests = (client: PartialVaif<{ refunds: BaseRefunds }>) => {
  test('retrieve', async () => {
    const responsePromise = client.refunds.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource refunds', () => runTests(client));
describe('resource refunds (tree shakable, base)', () => runTests(partialClient));
