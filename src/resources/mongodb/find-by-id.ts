// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseFindByID extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'findByID'] = Object.freeze(['mongoDB', 'findByID'] as const)

  retrieve(id: string, params: FindByIDRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params
    return this._client.get(path`/mongodb/${collection}/findById/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class FindByID extends BaseFindByID {

}

export interface FindByIDRetrieveParams {
  collection: string;
}

export declare namespace FindByID {
  export {
    type FindByIDRetrieveParams as FindByIDRetrieveParams
  };
}
