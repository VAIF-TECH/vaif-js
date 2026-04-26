// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.copilot.chat.create({
      message: 'x',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.ai.copilot.chat.create({
      message: 'x',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      attachments: [
        {
          content: 'content',
          type: 'schema',
          name: 'name',
        },
      ],
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
      pinnedContext: {
        bucketIds: ['string'],
        functionIds: ['string'],
        tableIds: ['string'],
      },
      sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      stream: true,
    });
  });

  // Mock server tests are disabled
  test.skip('stream', async () => {
    const responsePromise = client.ai.copilot.chat.stream();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
