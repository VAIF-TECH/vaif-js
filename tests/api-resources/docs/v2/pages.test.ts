// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePages } from '@vaif/client/resources/docs/v2/pages';
import { V2 } from '@vaif/client/resources/docs/v2/v2';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BasePages],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [V2],
});

const runTests = (client: PartialVaif<{ docs: { v2: { pages: BasePages } } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.docs.v2.pages.retrieve('slug');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.docs.v2.pages.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource pages', () => runTests(client));
describe('resource pages (tree shakable, base)', () => runTests(partialClient));
describe('resource pages (tree shakable, subresource)', () => runTests(parentPartialClient));
