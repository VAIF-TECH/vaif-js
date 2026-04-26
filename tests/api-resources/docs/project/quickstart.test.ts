// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Project } from '@vaif/client/resources/docs/project/project';
import { BaseQuickstart } from '@vaif/client/resources/docs/project/quickstart';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseQuickstart],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Project],
});

const runTests = (client: PartialVaif<{ docs: { project: { quickstart: BaseQuickstart } } }>) => {
  test('getQuickstart', async () => {
    const responsePromise = client.docs.project.quickstart.getQuickstart('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource quickstart', () => runTests(client));
describe('resource quickstart (tree shakable, base)', () => runTests(partialClient));
describe('resource quickstart (tree shakable, subresource)', () => runTests(parentPartialClient));
