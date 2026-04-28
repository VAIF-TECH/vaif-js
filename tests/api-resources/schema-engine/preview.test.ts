// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePreview } from '@vaif/client/resources/schema-engine/preview';
import { SchemaEngine } from '@vaif/client/resources/schema-engine/schema-engine';

import Vaif from '@vaif/client';
import { createClient, type PartialVaif } from '@vaif/client/tree-shakable';

const client = new Vaif({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePreview],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SchemaEngine],
});

const runTests = (client: PartialVaif<{ schemaEngine: { preview: BasePreview } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.schemaEngine.preview.create({
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

  test('create: required and optional params', async () => {
    const response = await client.schemaEngine.preview.create({
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
};
describe('resource preview', () => runTests(client));
describe('resource preview (tree shakable, base)', () => runTests(partialClient));
describe('resource preview (tree shakable, subresource)', () => runTests(parentPartialClient));
