// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BasePreview extends APIResource {
  static override readonly _key: readonly ['schemaEngine', 'preview'] = Object.freeze(['schemaEngine', 'preview'] as const)

  /**
   * Preview schema migration changes
   */
  create(body: PreviewCreateParams, options?: RequestOptions): APIPromise<PreviewCreateResponse> {
    return this._client.post('/schema-engine/preview', { body, ...options });
  }
}
export class Preview extends BasePreview {

}

export interface PreviewCreateResponse {
  ok: true;

  plan: Array<unknown>;

  projectSchema: string;

  upSql: string;

  downSql?: string | null;

  warnings?: Array<unknown>;

[k: string]: unknown
}

export interface PreviewCreateParams {
  definition: PreviewCreateParams.Definition;

  projectId: string;

  allowDestructive?: boolean;

  envId?: string;
}

export namespace PreviewCreateParams {
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

export declare namespace Preview {
  export {
    type PreviewCreateResponse as PreviewCreateResponse,
    type PreviewCreateParams as PreviewCreateParams
  };
}
