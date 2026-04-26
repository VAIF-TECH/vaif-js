// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Copilot } from '@vaif/client/resources/ai/copilot/copilot';
import { BaseDeploy } from '@vaif/client/resources/ai/copilot/deploy/deploy';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseDeploy],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Copilot],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { deploy: BaseDeploy } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.ai.copilot.deploy.create({ projectId: 'x', resources: [{
    id: 'x',
    content: 'content',
    path: 'path',
    type: 'schema',
  }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.ai.copilot.deploy.create({
    projectId: 'x',
    resources: [{
    id: 'x',
    content: 'content',
    path: 'path',
    type: 'schema',
    name: 'name',
  }],
    dryRun: true,
    sessionId: 'sessionId',
  });
  });

  test('retrieve', async () => {
    const responsePromise = client.ai.copilot.deploy.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource deploy', () => runTests(client));
describe('resource deploy (tree shakable, base)', () => runTests(partialClient));
describe('resource deploy (tree shakable, subresource)', () => runTests(parentPartialClient));
