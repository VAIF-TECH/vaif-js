// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Functions } from '@vaif/client/resources/functions/functions';
import { BaseTriggers } from '@vaif/client/resources/functions/triggers';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseTriggers],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Functions],
});

const runTests = (client: PartialVaif<{ functions: { triggers: BaseTriggers } }>) => {
  test('delete', async () => {
    const responsePromise = client.functions.triggers.delete('triggerId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getTriggers', async () => {
    const responsePromise = client.functions.triggers.getTriggers('functionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('triggers: only required params', async () => {
    const responsePromise = client.functions.triggers.triggers('functionId', {
      event: 'db.insert',
      tableName: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('triggers: required and optional params', async () => {
    const response = await client.functions.triggers.triggers('functionId', {
      event: 'db.insert',
      tableName: 'x',
      enabled: true,
      filter: { foo: 'bar' },
    });
  });
};
describe('resource triggers', () => runTests(client));
describe('resource triggers (tree shakable, base)', () => runTests(partialClient));
describe('resource triggers (tree shakable, subresource)', () => runTests(parentPartialClient));
