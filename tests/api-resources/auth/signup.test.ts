// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Auth } from '@vaif/client/resources/auth/auth';
import { BaseSignup } from '@vaif/client/resources/auth/signup';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSignup],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Auth],
});

const runTests = (client: PartialVaif<{ auth: { signup: BaseSignup } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.auth.signup.create({ email: 'dev@stainless.com', password: 'xxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.auth.signup.create({
      email: 'dev@stainless.com',
      password: 'xxxxxxxx',
      name: 'name',
    });
  });
};
describe('resource signup', () => runTests(client));
describe('resource signup (tree shakable, base)', () => runTests(partialClient));
describe('resource signup (tree shakable, subresource)', () => runTests(parentPartialClient));
