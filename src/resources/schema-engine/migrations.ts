// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Migrations extends APIResource {
  /**
   * List migrations for a project
   */
  list(projectID: string, options?: RequestOptions): APIPromise<MigrationListResponse> {
    return this._client.get(path`/schema-engine/migrations/project/${projectID}`, options);
  }
}

export interface MigrationListResponse {
  migrations: Array<unknown>;

  ok: true;
}

export declare namespace Migrations {
  export { type MigrationListResponse as MigrationListResponse };
}
