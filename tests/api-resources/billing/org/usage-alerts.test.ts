// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Org } from '@vaif/client/resources/billing/org/org';
import { BaseUsageAlerts } from '@vaif/client/resources/billing/org/usage-alerts';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseUsageAlerts],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Org],
});

const runTests = (client: PartialVaif<{ billing: { org: { usageAlerts: BaseUsageAlerts } } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.billing.org.usageAlerts.update('alertId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.billing.org.usageAlerts.update('alertId', {
      orgId: 'orgId',
      enabled: true,
      notifyEmail: true,
      threshold: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.billing.org.usageAlerts.delete('alertId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.billing.org.usageAlerts.delete('alertId', { orgId: 'orgId' });
  });

  test('getConfigured', async () => {
    const responsePromise = client.billing.org.usageAlerts.getConfigured('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getHistory', async () => {
    const responsePromise = client.billing.org.usageAlerts.getHistory('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getUsageAlerts', async () => {
    const responsePromise = client.billing.org.usageAlerts.getUsageAlerts('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('usageAlerts: only required params', async () => {
    const responsePromise = client.billing.org.usageAlerts.usageAlerts('orgId', {
      metric: 'ai_credits',
      threshold: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('usageAlerts: required and optional params', async () => {
    const response = await client.billing.org.usageAlerts.usageAlerts('orgId', {
      metric: 'ai_credits',
      threshold: 1,
      notifyEmail: true,
    });
  });
};
describe('resource usageAlerts', () => runTests(client));
describe('resource usageAlerts (tree shakable, base)', () => runTests(partialClient));
describe('resource usageAlerts (tree shakable, subresource)', () => runTests(parentPartialClient));
