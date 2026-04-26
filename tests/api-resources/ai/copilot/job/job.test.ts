// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vaif from '@vaif-tech/client';

const client = new Vaif({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource job', () => {
  test('create: only required params', async () => {
    const responsePromise = client.ai.copilot.job.create({ message: 'x', projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.ai.copilot.job.create({
    message: 'x',
    projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    attachments: [{
    content: 'content',
    type: 'schema',
    name: 'name',
  }],
    generationOptions: {
    apiStyle: 'rest',
    architecture: 'mvc',
    auditLogs: true,
    authMethod: 'vaif',
    containerization: 'docker',
    database: 'vaif',
    dbMigrations: true,
    deployTarget: 'railway',
    emailVerification: true,
    featureFlags: true,
    framework: 'framework',
    gitHooks: true,
    healthChecks: true,
    includeApiCollection: true,
    includeSampleData: true,
    includeSdkClient: true,
    language: 'typescript',
    mfa: true,
    mode: 'opinionated',
    multiTenant: 'single',
    outputDepth: 'minimal',
    rateLimiting: true,
    rbac: 'off',
    realtime: 'websockets',
    scope: 'schema-only',
    securityHeaders: true,
    storage: 'vaif',
    tests: ['unit'],
  },
    generationTypes: ['schema'],
    modelId: 'modelId',
    resumeFromCheckpoint: 'resumeFromCheckpoint',
    resumeFromExecution: 'resumeFromExecution',
    sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
  });
  });

  test('retrieve', async () => {
    const responsePromise = client.ai.copilot.job.retrieve('jobId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
