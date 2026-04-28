// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAccept } from '@vaif/client/resources/orgs/invites/accept';
import { Invites } from '@vaif/client/resources/orgs/invites/invites';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAccept],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Invites],
});

const runTests = (client: PartialVaif<{ orgs: { invites: { accept: BaseAccept } } }>) => {
  test('create', async () => {
    const responsePromise = client.orgs.invites.accept.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource accept', () => runTests(client));
describe('resource accept (tree shakable, base)', () => runTests(partialClient));
describe('resource accept (tree shakable, subresource)', () => runTests(parentPartialClient));
