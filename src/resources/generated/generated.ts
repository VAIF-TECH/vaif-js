// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AggregateAPI from './aggregate';
import { Aggregate } from './aggregate';
import * as BulkAPI from './bulk';
import { Bulk } from './bulk';
import * as QueryAPI from './query';
import { Query } from './query';
import * as SearchAPI from './search';
import { Search } from './search';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Generated extends APIResource {
  aggregate: AggregateAPI.Aggregate = new AggregateAPI.Aggregate(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);

  create(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/generated/${table}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/generated/${table}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  update(id: string, params: GeneratedUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { table } = params
    return this._client.patch(path`/generated/${table}/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(id: string, params: GeneratedDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { table } = params
    return this._client.delete(path`/generated/${table}/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve2(id: string, params: GeneratedRetrieve2Params, options?: RequestOptions): APIPromise<void> {
    const { table } = params
    return this._client.get(path`/generated/${table}/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface GeneratedUpdateParams {
  table: string;
}

export interface GeneratedDeleteParams {
  table: string;
}

export interface GeneratedRetrieve2Params {
  table: string;
}

Generated.Aggregate = Aggregate;
Generated.Bulk = Bulk;
Generated.Query = Query;
Generated.Search = Search;

export declare namespace Generated {
  export {
    type GeneratedUpdateParams as GeneratedUpdateParams,
    type GeneratedDeleteParams as GeneratedDeleteParams,
    type GeneratedRetrieve2Params as GeneratedRetrieve2Params
  };

  export {
    Aggregate as Aggregate
  };

  export {
    Bulk as Bulk
  };

  export {
    Query as Query
  };

  export {
    Search as Search
  };
}
