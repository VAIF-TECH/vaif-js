// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseApply extends APIResource {
  static override readonly _key: readonly ['schemaEngine', 'apply'] = Object.freeze(['schemaEngine', 'apply'] as const)

  /**
   * Apply schema migration
   */
  create(body: ApplyCreateParams, options?: RequestOptions): APIPromise<ApplyCreateResponse> {
    return this._client.post('/schema-engine/apply', { body, ...options });
  }
}
export class Apply extends BaseApply {

}

export interface ApplyCreateResponse {
  appliedSteps: number;

  migration: ApplyCreateResponse.Migration;

  ok: true;

  projectSchema: string;

[k: string]: unknown
}

export namespace ApplyCreateResponse {
  export interface Migration {
    id: string;

    appliedAt: string | (string & {}) | null;

    name: string;

    status: string;

  [k: string]: unknown
  }
}

export interface ApplyCreateParams {
  definition: ApplyCreateParams.Definition;

  projectId: string;

  allowDestructive?: boolean;

  envId?: string;

  fromAiWorkspace?: boolean;

  migrationName?: string;
}

export namespace ApplyCreateParams {
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

        type: 'uuid' | 'text' | 'varchar' | 'string' | 'int' | 'integer' | 'bigint' | 'boolean' | 'bool' | 'jsonb' | 'json' | 'timestamptz' | 'timestamp' | 'date' | 'numeric' | 'decimal' | 'float' | 'double' | 'text[]' | 'integer[]';

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

export declare namespace Apply {
  export {
    type ApplyCreateResponse as ApplyCreateResponse,
    type ApplyCreateParams as ApplyCreateParams
  };
}
