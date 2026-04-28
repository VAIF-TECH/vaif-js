// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFunctions } from '@vaif/client/resources/functions/functions';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseFunctions],
});

const runTests = (client: PartialVaif<{ functions: BaseFunctions }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.functions.create({
      name: 'name',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.functions.create({
      name: 'name',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'description',
      entrypoint: 'entrypoint',
      envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      runtime: 'runtime',
      schedule: 'schedule',
      timeoutMs: 1000,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.functions.retrieve('functionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.functions.update('functionId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.functions.delete('functionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource functions', () => runTests(client));
describe('resource functions (tree shakable, base)', () => runTests(partialClient));
