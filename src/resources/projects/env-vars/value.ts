// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Value extends APIResource {
  getValue(envVarID: string, params: ValueGetValueParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/projects/${projectId}/env-vars/${envVarID}/value`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface ValueGetValueParams {
  projectId: string;
}

export declare namespace Value {
  export {
    type ValueGetValueParams as ValueGetValueParams
  };
}
