// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { EnvVars } from '@vaif/client/resources/projects/env-vars/env-vars';
import { BaseValue } from '@vaif/client/resources/projects/env-vars/value';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseValue],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [EnvVars],
});

const runTests = (client: PartialVaif<{ projects: { envVars: { value: BaseValue } } }>) => {
  test('getValue: only required params', async () => {
    const responsePromise = client.projects.envVars.value.getValue('envVarId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getValue: required and optional params', async () => {
    const response = await client.projects.envVars.value.getValue('envVarId', { projectId: 'projectId' });
  });
};
describe('resource value', () => runTests(client));
describe('resource value (tree shakable, base)', () => runTests(partialClient));
describe('resource value (tree shakable, subresource)', () => runTests(parentPartialClient));
