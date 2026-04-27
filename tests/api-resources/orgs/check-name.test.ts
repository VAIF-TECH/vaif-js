// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCheckName } from '@vaif/client/resources/orgs/check-name';
import { Orgs } from '@vaif/client/resources/orgs/orgs';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCheckName],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Orgs],
});

const runTests = (client: PartialVaif<{ orgs: { checkName: BaseCheckName } }>) => {
  test('list', async () => {
    const responsePromise = client.orgs.checkName.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource checkName', () => runTests(client));
describe('resource checkName (tree shakable, base)', () => runTests(partialClient));
describe('resource checkName (tree shakable, subresource)', () => runTests(parentPartialClient));
