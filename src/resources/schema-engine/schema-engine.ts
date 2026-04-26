// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MigrationsAPI from './migrations';
import { MigrationListResponse, Migrations } from './migrations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SchemaEngine extends APIResource {
  migrations: MigrationsAPI.Migrations = new MigrationsAPI.Migrations(this._client);

  /**
   * Apply schema migration
   */
  apply(body: SchemaEngineApplyParams, options?: RequestOptions): APIPromise<SchemaEngineApplyResponse> {
    return this._client.post('/schema-engine/apply', { body, ...options });
  }

  /**
   * Execute SQL query against project database
   */
  executeQuery(
    projectID: string,
    body: SchemaEngineExecuteQueryParams,
    options?: RequestOptions,
  ): APIPromise<SchemaEngineExecuteQueryResponse> {
    return this._client.post(path`/schema-engine/query/${projectID}`, { body, ...options });
  }

  /**
   * Get schema change history for a project
   */
  getChanges(projectID: string, options?: RequestOptions): APIPromise<SchemaEngineGetChangesResponse> {
    return this._client.get(path`/schema-engine/${projectID}/changes`, options);
  }

  /**
   * Introspect current database schema for a project
   */
  introspect(projectID: string, options?: RequestOptions): APIPromise<SchemaEngineIntrospectResponse> {
    return this._client.get(path`/schema-engine/introspect/${projectID}`, options);
  }

  /**
   * Preview schema migration changes
   */
  preview(
    body: SchemaEnginePreviewParams,
    options?: RequestOptions,
  ): APIPromise<SchemaEnginePreviewResponse> {
    return this._client.post('/schema-engine/preview', { body, ...options });
  }
}

export interface SchemaEngineApplyResponse {
  appliedSteps: number;

  migration: SchemaEngineApplyResponse.Migration;

  ok: true;

  projectSchema: string;

  [k: string]: unknown;
}

export namespace SchemaEngineApplyResponse {
  export interface Migration {
    id: string;

    appliedAt: string | (string & {}) | null;

    name: string;

    status: string;

    [k: string]: unknown;
  }
}

export interface SchemaEngineExecuteQueryResponse {
  executionTimeMs: number;

  ok: true;

  rowCount: number | null;

  rows: Array<unknown>;

  command?: string;

  fields?: Array<SchemaEngineExecuteQueryResponse.Field>;

  [k: string]: unknown;
}

export namespace SchemaEngineExecuteQueryResponse {
  export interface Field {
    dataTypeID: number;

    name: string;
  }
}

export interface SchemaEngineGetChangesResponse {
  data: Array<unknown>;

  ok: true;
}

export interface SchemaEngineIntrospectResponse {
  ok: true;

  schemaExists: boolean;

  tables: Array<unknown>;

  schemaName?: string;

  [k: string]: unknown;
}

export interface SchemaEnginePreviewResponse {
  ok: true;

  plan: Array<unknown>;

  projectSchema: string;

  upSql: string;

  downSql?: string | null;

  warnings?: Array<unknown>;

  [k: string]: unknown;
}

export interface SchemaEngineApplyParams {
  definition: SchemaEngineApplyParams.Definition;

  projectId: string;

  allowDestructive?: boolean;

  envId?: string;

  fromAiWorkspace?: boolean;

  migrationName?: string;
}

export namespace SchemaEngineApplyParams {
  export interface Definition {
    schemaVersion: '1.0';

    tables: Array<Definition.Table>;
  }

  export namespace Definition {
    export interface Table {
      columns: Array<Table.Column>;

      name: string;

      indexes?: Array<Table.Index>;

      unique?: Array<Table.Unique>;
    }

    export namespace Table {
      export interface Column {
        name: string;

        type:
          | 'uuid'
          | 'text'
          | 'varchar'
          | 'string'
          | 'int'
          | 'integer'
          | 'bigint'
          | 'boolean'
          | 'bool'
          | 'jsonb'
          | 'json'
          | 'timestamptz'
          | 'timestamp'
          | 'date'
          | 'numeric'
          | 'decimal'
          | 'float'
          | 'double'
          | 'text[]'
          | 'integer[]';

        default?: string | number | boolean;

        nullable?: boolean;

        primaryKey?: boolean;

        references?: Column.References;

        unique?: boolean;
      }

      export namespace Column {
        export interface References {
          table: string;

          column?: string;

          onDelete?: 'CASCADE' | 'RESTRICT' | 'SET NULL' | 'SET DEFAULT' | 'NO ACTION';

          onUpdate?: 'CASCADE' | 'RESTRICT' | 'SET NULL' | 'SET DEFAULT' | 'NO ACTION';
        }
      }

      export interface Index {
        columns: Array<string>;

        name: string;

        unique?: boolean;
      }

      export interface Unique {
        columns: Array<string>;

        name: string;
      }
    }
  }
}

export interface SchemaEngineExecuteQueryParams {
  sql: string;

  params?: Array<unknown>;
}

export interface SchemaEnginePreviewParams {
  definition: SchemaEnginePreviewParams.Definition;

  projectId: string;

  allowDestructive?: boolean;

  envId?: string;
}

export namespace SchemaEnginePreviewParams {
  export interface Definition {
    schemaVersion: '1.0';

    tables: Array<Definition.Table>;
  }

  export namespace Definition {
    export interface Table {
      columns: Array<Table.Column>;

      name: string;

      indexes?: Array<Table.Index>;

      unique?: Array<Table.Unique>;
    }

    export namespace Table {
      export interface Column {
        name: string;

        type:
          | 'uuid'
          | 'text'
          | 'varchar'
          | 'string'
          | 'int'
          | 'integer'
          | 'bigint'
          | 'boolean'
          | 'bool'
          | 'jsonb'
          | 'json'
          | 'timestamptz'
          | 'timestamp'
          | 'date'
          | 'numeric'
          | 'decimal'
          | 'float'
          | 'double'
          | 'text[]'
          | 'integer[]';

        default?: string | number | boolean;

        nullable?: boolean;

        primaryKey?: boolean;

        references?: Column.References;

        unique?: boolean;
      }

      export namespace Column {
        export interface References {
          table: string;

          column?: string;

          onDelete?: 'CASCADE' | 'RESTRICT' | 'SET NULL' | 'SET DEFAULT' | 'NO ACTION';

          onUpdate?: 'CASCADE' | 'RESTRICT' | 'SET NULL' | 'SET DEFAULT' | 'NO ACTION';
        }
      }

      export interface Index {
        columns: Array<string>;

        name: string;

        unique?: boolean;
      }

      export interface Unique {
        columns: Array<string>;

        name: string;
      }
    }
  }
}

SchemaEngine.Migrations = Migrations;

export declare namespace SchemaEngine {
  export {
    type SchemaEngineApplyResponse as SchemaEngineApplyResponse,
    type SchemaEngineExecuteQueryResponse as SchemaEngineExecuteQueryResponse,
    type SchemaEngineGetChangesResponse as SchemaEngineGetChangesResponse,
    type SchemaEngineIntrospectResponse as SchemaEngineIntrospectResponse,
    type SchemaEnginePreviewResponse as SchemaEnginePreviewResponse,
    type SchemaEngineApplyParams as SchemaEngineApplyParams,
    type SchemaEngineExecuteQueryParams as SchemaEngineExecuteQueryParams,
    type SchemaEnginePreviewParams as SchemaEnginePreviewParams,
  };

  export { Migrations as Migrations, type MigrationListResponse as MigrationListResponse };
}
