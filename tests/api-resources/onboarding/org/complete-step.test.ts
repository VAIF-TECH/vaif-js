// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCompleteStep } from '@vaif/client/resources/onboarding/org/complete-step';
import { Org } from '@vaif/client/resources/onboarding/org/org';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCompleteStep],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ onboarding: { org: { completeStep: BaseCompleteStep } } }>) => {
  test('completeStep', async () => {
    const responsePromise = client.onboarding.org.completeStep.completeStep('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource completeStep', () => runTests(client));
describe('resource completeStep (tree shakable, base)', () => runTests(partialClient));
describe('resource completeStep (tree shakable, subresource)', () => runTests(parentPartialClient));
