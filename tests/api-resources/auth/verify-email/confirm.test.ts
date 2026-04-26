// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConfirm } from '@vaif/client/resources/auth/verify-email/confirm';
import { VerifyEmail } from '@vaif/client/resources/auth/verify-email/verify-email';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseConfirm],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [VerifyEmail],
});

const runTests = (client: PartialVaif<{ auth: { verifyEmail: { confirm: BaseConfirm } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.auth.verifyEmail.confirm.create({ token: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.auth.verifyEmail.confirm.create({ token: 'x' });
  });
};
describe('resource confirm', () => runTests(client));
describe('resource confirm (tree shakable, base)', () => runTests(partialClient));
describe('resource confirm (tree shakable, subresource)', () => runTests(parentPartialClient));
