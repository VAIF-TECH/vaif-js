// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAudit } from '@vaif/client/resources/security/audit';
import { Security } from '@vaif/client/resources/security/security';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAudit],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Security],
});

const runTests = (client: PartialVaif<{ security: { audit: BaseAudit } }>) => {
  test('retrieve', async () => {
    const responsePromise = client.security.audit.retrieve('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource audit', () => runTests(client));
describe('resource audit (tree shakable, base)', () => runTests(partialClient));
describe('resource audit (tree shakable, subresource)', () => runTests(parentPartialClient));
