// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBulk } from '@vaif/client/resources/incidents/bulk';
import { Incidents } from '@vaif/client/resources/incidents/incidents';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseBulk],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Incidents],
});

const runTests = (client: PartialVaif<{ incidents: { bulk: BaseBulk } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.incidents.bulk.create({ action: 'acknowledge', ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.incidents.bulk.create({ action: 'acknowledge', ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] });
  });
};
describe('resource bulk', () => runTests(client));
describe('resource bulk (tree shakable, base)', () => runTests(partialClient));
describe('resource bulk (tree shakable, subresource)', () => runTests(parentPartialClient));
