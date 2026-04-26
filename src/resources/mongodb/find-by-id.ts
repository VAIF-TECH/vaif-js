// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FindByID extends APIResource {
  retrieve(id: string, params: FindByIDRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params
    return this._client.get(path`/mongodb/${collection}/findById/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface FindByIDRetrieveParams {
  collection: string;
}

export declare namespace FindByID {
  export {
    type FindByIDRetrieveParams as FindByIDRetrieveParams
  };
}
