// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Executions } from '@vaif/client/resources/ai/copilot/executions/executions';
import { BaseRollback } from '@vaif/client/resources/ai/copilot/executions/rollback';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseRollback],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Executions],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { executions: { rollback: BaseRollback } } } }>) => {
  test('rollback: only required params', async () => {
    const responsePromise = client.ai.copilot.executions.rollback.rollback('executionId', { checkpointId: 'checkpointId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rollback: required and optional params', async () => {
    const response = await client.ai.copilot.executions.rollback.rollback('executionId', { checkpointId: 'checkpointId' });
  });
};
describe('resource rollback', () => runTests(client));
describe('resource rollback (tree shakable, base)', () => runTests(partialClient));
describe('resource rollback (tree shakable, subresource)', () => runTests(parentPartialClient));
