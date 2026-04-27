// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRotate extends APIResource {
  static override readonly _key: readonly ['projects', 'apiKeys', 'rotate'] = Object.freeze(['projects', 'apiKeys', 'rotate'] as const)

  rotate(keyID: string, params: RotateRotateParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/api-keys/${keyID}/rotate`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Rotate extends BaseRotate {

}

export interface RotateRotateParams {
  projectId: string;
}

export declare namespace Rotate {
  export {
    type RotateRotateParams as RotateRotateParams
  };
}
