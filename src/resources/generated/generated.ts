// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkAPI from './bulk';
import { Bulk } from './bulk';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Generated extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  create(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/generated/${table}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(id: string, params: GeneratedRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { table } = params;
    return this._client.get(path`/generated/${table}/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(id: string, params: GeneratedUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { table } = params;
    return this._client.patch(path`/generated/${table}/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/generated/${table}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(id: string, params: GeneratedDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { table } = params;
    return this._client.delete(path`/generated/${table}/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  aggregate(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/generated/${table}/aggregate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  query(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/generated/${table}/query`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  search(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/generated/${table}/search`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GeneratedRetrieveParams {
  table: string;
}

export interface GeneratedUpdateParams {
  table: string;
}

export interface GeneratedDeleteParams {
  table: string;
}

Generated.Bulk = Bulk;

export declare namespace Generated {
  export {
    type GeneratedRetrieveParams as GeneratedRetrieveParams,
    type GeneratedUpdateParams as GeneratedUpdateParams,
    type GeneratedDeleteParams as GeneratedDeleteParams,
  };

  export { Bulk as Bulk };
}
