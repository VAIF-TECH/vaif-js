// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseIndexes extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'indexes'] = Object.freeze([
    'mongoDB',
    'indexes',
  ] as const);

  delete(indexName: string, params: IndexDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params;
    return this._client.delete(path`/mongodb/${collection}/indexes/${indexName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getIndexes(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/mongodb/${collection}/indexes`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  indexes(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/indexes`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Indexes extends BaseIndexes {}

export interface IndexDeleteParams {
  collection: string;
}

export declare namespace Indexes {
  export { type IndexDeleteParams as IndexDeleteParams };
}
