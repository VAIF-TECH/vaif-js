// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseApply } from '@vaif/client/resources/plans/apply';
import { Plans } from '@vaif/client/resources/plans/plans';

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
  resources: [Plans],
});

const runTests = (client: PartialVaif<{ plans: { apply: BaseApply } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.plans.apply.create({
      planId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.plans.apply.create({
      planId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      allowApply: true,
      envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
};
describe('resource apply', () => runTests(client));
describe('resource apply (tree shakable, base)', () => runTests(partialClient));
describe('resource apply (tree shakable, subresource)', () => runTests(parentPartialClient));
