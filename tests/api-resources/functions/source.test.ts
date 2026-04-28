// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Functions } from '@vaif/client/resources/functions/functions';
import { BaseSource } from '@vaif/client/resources/functions/source';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSource],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Functions],
});

const runTests = (client: PartialVaif<{ functions: { source: BaseSource } }>) => {
  test('source: only required params', async () => {
    const responsePromise = client.functions.source.source('functionId', { sourceCode: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('source: required and optional params', async () => {
    const response = await client.functions.source.source('functionId', { sourceCode: 'x' });
  });
};
describe('resource source', () => runTests(client));
describe('resource source (tree shakable, base)', () => runTests(partialClient));
describe('resource source (tree shakable, subresource)', () => runTests(parentPartialClient));
