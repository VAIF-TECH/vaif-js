// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSchemas } from '@vaif/client/resources/schemas/schemas';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseSchemas],
});

const runTests = (client: PartialVaif<{ schemas: BaseSchemas }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.schemas.create({ projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.schemas.create({
    projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    name: 'x',
    schema: {},
  });
  });
};
describe('resource schemas', () => runTests(client));
describe('resource schemas (tree shakable, base)', () => runTests(partialClient));
