// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseUpgradeOptions extends APIResource {
  static override readonly _key: readonly ['projects', 'infrastructure', 'upgradeOptions'] = Object.freeze(['projects', 'infrastructure', 'upgradeOptions'] as const)

  getUpgradeOptions(instanceID: string, params: UpgradeOptionGetUpgradeOptionsParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/projects/${projectId}/infrastructure/${instanceID}/upgrade-options`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class UpgradeOptions extends BaseUpgradeOptions {

}

export interface UpgradeOptionGetUpgradeOptionsParams {
  projectId: string;
}

export declare namespace UpgradeOptions {
  export {
    type UpgradeOptionGetUpgradeOptionsParams as UpgradeOptionGetUpgradeOptionsParams
  };
}
