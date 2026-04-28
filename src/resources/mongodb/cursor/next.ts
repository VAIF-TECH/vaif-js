// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseNext extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'cursor', 'next'] = Object.freeze([
    'mongoDB',
    'cursor',
    'next',
  ] as const);

  next(cursorID: string, params: NextNextParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params;
    return this._client.post(path`/mongodb/${collection}/cursor/${cursorID}/next`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Next extends BaseNext {}

export interface NextNextParams {
  collection: string;
}

export declare namespace Next {
  export { type NextNextParams as NextNextParams };
}
