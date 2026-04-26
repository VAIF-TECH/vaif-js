// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCareers } from '@vaif/client/resources/cms/careers';
import { Cms } from '@vaif/client/resources/cms/cms';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCareers],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Cms],
});

const runTests = (client: PartialVaif<{ cms: { careers: BaseCareers } }>) => {
  test('list', async () => {
    const responsePromise = client.cms.careers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource careers', () => runTests(client));
describe('resource careers (tree shakable, base)', () => runTests(partialClient));
describe('resource careers (tree shakable, subresource)', () => runTests(parentPartialClient));
