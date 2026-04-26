// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource infrastructure', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.infrastructure.list('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.infrastructure.delete('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.projects.infrastructure.delete('instanceId', { projectId: 'projectId' });
  });

  // Mock server tests are disabled
  test.skip('migrateNow: only required params', async () => {
    const responsePromise = client.projects.infrastructure.migrateNow('instanceId', {
      projectId: 'projectId',
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
  test.skip('migrateNow: required and optional params', async () => {
    const response = await client.projects.infrastructure.migrateNow('instanceId', {
      projectId: 'projectId',
    });
  });

  // Mock server tests are disabled
  test.skip('provision', async () => {
    const responsePromise = client.projects.infrastructure.provision('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('provisionCustom', async () => {
    const responsePromise = client.projects.infrastructure.provisionCustom('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('replica: only required params', async () => {
    const responsePromise = client.projects.infrastructure.replica('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('replica: required and optional params', async () => {
    const response = await client.projects.infrastructure.replica('instanceId', { projectId: 'projectId' });
  });

  // Mock server tests are disabled
  test.skip('resize: only required params', async () => {
    const responsePromise = client.projects.infrastructure.resize('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resize: required and optional params', async () => {
    const response = await client.projects.infrastructure.resize('instanceId', { projectId: 'projectId' });
  });

  // Mock server tests are disabled
  test.skip('resizeCustom: only required params', async () => {
    const responsePromise = client.projects.infrastructure.resizeCustom('instanceId', {
      projectId: 'projectId',
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
  test.skip('resizeCustom: required and optional params', async () => {
    const response = await client.projects.infrastructure.resizeCustom('instanceId', {
      projectId: 'projectId',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveMetrics: only required params', async () => {
    const responsePromise = client.projects.infrastructure.retrieveMetrics('instanceId', {
      projectId: 'projectId',
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
  test.skip('retrieveMetrics: required and optional params', async () => {
    const response = await client.projects.infrastructure.retrieveMetrics('instanceId', {
      projectId: 'projectId',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveMigrationStatus', async () => {
    const responsePromise = client.projects.infrastructure.retrieveMigrationStatus('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveReplicas: only required params', async () => {
    const responsePromise = client.projects.infrastructure.retrieveReplicas('instanceId', {
      projectId: 'projectId',
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
  test.skip('retrieveReplicas: required and optional params', async () => {
    const response = await client.projects.infrastructure.retrieveReplicas('instanceId', {
      projectId: 'projectId',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveUpgradeOptions: only required params', async () => {
    const responsePromise = client.projects.infrastructure.retrieveUpgradeOptions('instanceId', {
      projectId: 'projectId',
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
  test.skip('retrieveUpgradeOptions: required and optional params', async () => {
    const response = await client.projects.infrastructure.retrieveUpgradeOptions('instanceId', {
      projectId: 'projectId',
    });
  });

  // Mock server tests are disabled
  test.skip('start: only required params', async () => {
    const responsePromise = client.projects.infrastructure.start('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('start: required and optional params', async () => {
    const response = await client.projects.infrastructure.start('instanceId', { projectId: 'projectId' });
  });

  // Mock server tests are disabled
  test.skip('stop: only required params', async () => {
    const responsePromise = client.projects.infrastructure.stop('instanceId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('stop: required and optional params', async () => {
    const response = await client.projects.infrastructure.stop('instanceId', { projectId: 'projectId' });
  });
});
