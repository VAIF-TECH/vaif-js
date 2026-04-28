// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFunction } from '@vaif/client/resources/functions/invocations/function';
import { Invocations } from '@vaif/client/resources/functions/invocations/invocations';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseFunction],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Invocations],
});

const runTests = (client: PartialVaif<{ functions: { invocations: { function: BaseFunction } } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.functions.invocations.function.retrieve('functionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource function', () => runTests(client));
describe('resource function (tree shakable, base)', () => runTests(partialClient));
describe('resource function (tree shakable, subresource)', () => runTests(parentPartialClient));
