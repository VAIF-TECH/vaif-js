// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VaifStudio from 'vaif-studio';

const client = new VaifStudio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schemaEngine', () => {
  // Mock server tests are disabled
  test.skip('apply: only required params', async () => {
    const responsePromise = client.schemaEngine.apply({
      definition: { schemaVersion: '1.0', tables: [{ columns: [{ name: 'x', type: 'uuid' }], name: 'x' }] },
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
  test.skip('apply: required and optional params', async () => {
    const response = await client.schemaEngine.apply({
      definition: {
        schemaVersion: '1.0',
        tables: [
          {
            columns: [
              {
                name: 'x',
                type: 'uuid',
                default: 'string',
                nullable: true,
                primaryKey: true,
                references: {
                  table: 'table',
                  column: 'column',
                  onDelete: 'CASCADE',
                  onUpdate: 'CASCADE',
                },
                unique: true,
              },
            ],
            name: 'x',
            indexes: [
              {
                columns: ['x'],
                name: 'x',
                unique: true,
              },
            ],
            unique: [{ columns: ['x'], name: 'x' }],
          },
        ],
      },
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      allowDestructive: true,
      envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      fromAiWorkspace: true,
      migrationName: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('executeQuery: only required params', async () => {
    const responsePromise = client.schemaEngine.executeQuery('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sql: 'x',
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
  test.skip('executeQuery: required and optional params', async () => {
    const response = await client.schemaEngine.executeQuery('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sql: 'x',
      params: [{}],
    });
  });

  // Mock server tests are disabled
  test.skip('getChanges', async () => {
    const responsePromise = client.schemaEngine.getChanges('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('introspect', async () => {
    const responsePromise = client.schemaEngine.introspect('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('preview: only required params', async () => {
    const responsePromise = client.schemaEngine.preview({
      definition: { schemaVersion: '1.0', tables: [{ columns: [{ name: 'x', type: 'uuid' }], name: 'x' }] },
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
  test.skip('preview: required and optional params', async () => {
    const response = await client.schemaEngine.preview({
      definition: {
        schemaVersion: '1.0',
        tables: [
          {
            columns: [
              {
                name: 'x',
                type: 'uuid',
                default: 'string',
                nullable: true,
                primaryKey: true,
                references: {
                  table: 'table',
                  column: 'column',
                  onDelete: 'CASCADE',
                  onUpdate: 'CASCADE',
                },
                unique: true,
              },
            ],
            name: 'x',
            indexes: [
              {
                columns: ['x'],
                name: 'x',
                unique: true,
              },
            ],
            unique: [{ columns: ['x'], name: 'x' }],
          },
        ],
      },
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      allowDestructive: true,
      envId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
