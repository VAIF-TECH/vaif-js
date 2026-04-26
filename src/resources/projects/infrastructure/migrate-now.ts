// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseMigrateNow extends APIResource {
  static override readonly _key: readonly ['projects', 'infrastructure', 'migrateNow'] = Object.freeze(['projects', 'infrastructure', 'migrateNow'] as const)

  migrateNow(instanceID: string, params: MigrateNowMigrateNowParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/migrate-now`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class MigrateNow extends BaseMigrateNow {

}

export interface MigrateNowMigrateNowParams {
  projectId: string;
}

export declare namespace MigrateNow {
  export {
    type MigrateNowMigrateNowParams as MigrateNowMigrateNowParams
  };
}
