// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSend } from '@vaif/client/resources/auth/verify-email/send';
import { VerifyEmail } from '@vaif/client/resources/auth/verify-email/verify-email';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSend],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [VerifyEmail],
});

const runTests = (client: PartialVaif<{ auth: { verifyEmail: { send: BaseSend } } }>) => {
  test('create', async () => {
    const responsePromise = client.auth.verifyEmail.send.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource send', () => runTests(client));
describe('resource send (tree shakable, base)', () => runTests(partialClient));
describe('resource send (tree shakable, subresource)', () => runTests(parentPartialClient));
