// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAws } from '@vaif/client/resources/ai/copilot/export/terraform/aws';
import { Terraform } from '@vaif/client/resources/ai/copilot/export/terraform/terraform';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAws],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Terraform],
});

const runTests = (client: PartialVaif<{ ai: { copilot: { export: { terraform: { aws: BaseAws } } } } }>) => {
  test('create', async () => {
    const responsePromise = client.ai.copilot.export.terraform.aws.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource aws', () => runTests(client));
describe('resource aws (tree shakable, base)', () => runTests(partialClient));
describe('resource aws (tree shakable, subresource)', () => runTests(parentPartialClient));
