// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Orgs } from '@vaif/client/resources/orgs/orgs';
import { BaseProfile } from '@vaif/client/resources/orgs/profile';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseProfile],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Orgs],
});

const runTests = (client: PartialVaif<{ orgs: { profile: BaseProfile } }>) => {
  test('getProfile', async () => {
    const responsePromise = client.orgs.profile.getProfile('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('profile', async () => {
    const responsePromise = client.orgs.profile.profile('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource profile', () => runTests(client));
describe('resource profile (tree shakable, base)', () => runTests(partialClient));
describe('resource profile (tree shakable, subresource)', () => runTests(parentPartialClient));
