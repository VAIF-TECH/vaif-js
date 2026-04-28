// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseApply } from '@vaif/client/resources/templates/install/apply';
import { Install } from '@vaif/client/resources/templates/install/install';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseApply],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Install],
});

const runTests = (client: PartialVaif<{ templates: { install: { apply: BaseApply } } }>) => {
  test('create', async () => {
    const responsePromise = client.templates.install.apply.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource apply', () => runTests(client));
describe('resource apply (tree shakable, base)', () => runTests(partialClient));
describe('resource apply (tree shakable, subresource)', () => runTests(parentPartialClient));
