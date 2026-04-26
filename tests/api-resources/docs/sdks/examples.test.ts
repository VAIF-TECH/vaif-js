// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseExamples } from '@vaif/client/resources/docs/sdks/examples';
import { SDKs } from '@vaif/client/resources/docs/sdks/sdks';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseExamples],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [SDKs],
});

const runTests = (client: PartialVaif<{ docs: { sdks: { examples: BaseExamples } } }>) => {
  test('getExamples', async () => {
    const responsePromise = client.docs.sdks.examples.getExamples('sdkId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource examples', () => runTests(client));
describe('resource examples (tree shakable, base)', () => runTests(partialClient));
describe('resource examples (tree shakable, subresource)', () => runTests(parentPartialClient));
