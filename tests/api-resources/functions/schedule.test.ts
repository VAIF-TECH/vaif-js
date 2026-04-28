// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Functions } from '@vaif/client/resources/functions/functions';
import { BaseSchedule } from '@vaif/client/resources/functions/schedule';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSchedule],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Functions],
});

const runTests = (client: PartialVaif<{ functions: { schedule: BaseSchedule } }>) => {
  test('getSchedule', async () => {
    const responsePromise = client.functions.schedule.getSchedule('functionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('schedule: only required params', async () => {
    const responsePromise = client.functions.schedule.schedule('functionId', { cron: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('schedule: required and optional params', async () => {
    const response = await client.functions.schedule.schedule('functionId', { cron: 'x', enabled: true });
  });

  test('schedule2', async () => {
    const responsePromise = client.functions.schedule.schedule2('functionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource schedule', () => runTests(client));
describe('resource schedule (tree shakable, base)', () => runTests(partialClient));
describe('resource schedule (tree shakable, subresource)', () => runTests(parentPartialClient));
