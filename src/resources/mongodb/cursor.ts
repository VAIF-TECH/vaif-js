// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Cursor extends APIResource {
  close(cursorID: string, params: CursorCloseParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params;
    return this._client.post(path`/mongodb/${collection}/cursor/${cursorID}/close`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  next(cursorID: string, params: CursorNextParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params;
    return this._client.post(path`/mongodb/${collection}/cursor/${cursorID}/next`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CursorCloseParams {
  collection: string;
}

export interface CursorNextParams {
  collection: string;
}

export declare namespace Cursor {
  export { type CursorCloseParams as CursorCloseParams, type CursorNextParams as CursorNextParams };
}
