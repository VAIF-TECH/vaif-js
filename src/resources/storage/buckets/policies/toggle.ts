// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseToggle extends APIResource {
  static override readonly _key: readonly ['storage', 'buckets', 'policies', 'toggle'] = Object.freeze(['storage', 'buckets', 'policies', 'toggle'] as const)

  toggle(policyID: string, params: ToggleToggleParams, options?: RequestOptions): APIPromise<void> {
    const { bucketId } = params
    return this._client.post(path`/storage/buckets/${bucketId}/policies/${policyID}/toggle`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Toggle extends BaseToggle {

}

export interface ToggleToggleParams {
  bucketId: string;
}

export declare namespace Toggle {
  export {
    type ToggleToggleParams as ToggleToggleParams
  };
}
