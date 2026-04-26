// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource domainStatus', () => {
  test('getDomainStatus: only required params', async () => {
    const responsePromise = client.projects.environments.domainStatus.getDomainStatus('envId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDomainStatus: required and optional params', async () => {
    const response = await client.projects.environments.domainStatus.getDomainStatus('envId', { projectId: 'projectId' });
  });
});
