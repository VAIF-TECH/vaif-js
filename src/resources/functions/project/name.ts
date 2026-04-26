// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseName extends APIResource {
  static override readonly _key: readonly ['functions', 'project', 'name'] = Object.freeze(['functions', 'project', 'name'] as const)

  retrieve(functionName: string, params: NameRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/functions/project/${projectId}/name/${functionName}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Name extends BaseName {

}

export interface NameRetrieveParams {
  projectId: string;
}

export declare namespace Name {
  export {
    type NameRetrieveParams as NameRetrieveParams
  };
}
