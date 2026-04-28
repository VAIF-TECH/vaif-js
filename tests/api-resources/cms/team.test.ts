// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cms } from '@vaif/client/resources/cms/cms';
import { BaseTeam } from '@vaif/client/resources/cms/team';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseTeam],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cms],
});

const runTests = (client: PartialVaif<{ cms: { team: BaseTeam } }>) => {
  test('list', async () => {
    const responsePromise = client.cms.team.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource team', () => runTests(client));
describe('resource team (tree shakable, base)', () => runTests(partialClient));
describe('resource team (tree shakable, subresource)', () => runTests(parentPartialClient));
