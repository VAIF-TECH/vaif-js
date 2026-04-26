// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif-tech/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource inquire', () => {
  test('create: only required params', async () => {
    const responsePromise = client.enterprise.inquire.create({
    companyName: 'x',
    contactEmail: 'dev@stainless.com',
    contactName: 'x',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.enterprise.inquire.create({
    companyName: 'x',
    contactEmail: 'dev@stainless.com',
    contactName: 'x',
    companySize: '1-10',
    contactPhone: 'contactPhone',
    currentPlan: 'free',
    estimatedProjects: 1,
    requirements: {
    bedrockRouting: true,
    customRetention: true,
    customSla: true,
    dedicatedDb: true,
    dedicatedSupport: true,
    hipaaCompliance: true,
    saml: true,
    soc2Compliance: true,
    sso: true,
    vertexRouting: true,
  },
    source: 'source',
    useCase: 'useCase',
  });
  });
});
