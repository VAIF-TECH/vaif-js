// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cms } from '@vaif/client/resources/cms/cms';
import { BaseTestimonials } from '@vaif/client/resources/cms/testimonials';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseTestimonials],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cms],
});

const runTests = (client: PartialVaif<{ cms: { testimonials: BaseTestimonials } }>) => {
  test('list', async () => {
    const responsePromise = client.cms.testimonials.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource testimonials', () => runTests(client));
describe('resource testimonials (tree shakable, base)', () => runTests(partialClient));
describe('resource testimonials (tree shakable, subresource)', () => runTests(parentPartialClient));
