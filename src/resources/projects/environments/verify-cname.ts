// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseVerifyCname extends APIResource {
  static override readonly _key: readonly ['projects', 'environments', 'verifyCname'] = Object.freeze(['projects', 'environments', 'verifyCname'] as const)

  verifyCname(envID: string, params: VerifyCnameVerifyCnameParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/environments/${envID}/verify-cname`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class VerifyCname extends BaseVerifyCname {

}

export interface VerifyCnameVerifyCnameParams {
  projectId: string;
}

export declare namespace VerifyCname {
  export {
    type VerifyCnameVerifyCnameParams as VerifyCnameVerifyCnameParams
  };
}
