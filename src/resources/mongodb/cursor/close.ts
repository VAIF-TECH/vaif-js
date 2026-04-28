// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseClose extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'cursor', 'close'] = Object.freeze([
    'mongoDB',
    'cursor',
    'close',
  ] as const);

  close(cursorID: string, params: CloseCloseParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params;
    return this._client.post(path`/mongodb/${collection}/cursor/${cursorID}/close`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Close extends BaseClose {}

export interface CloseCloseParams {
  collection: string;
}

export declare namespace Close {
  export { type CloseCloseParams as CloseCloseParams };
}
