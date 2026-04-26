// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Next extends APIResource {
  next(cursorID: string, params: NextNextParams, options?: RequestOptions): APIPromise<void> {
    const { collection } = params
    return this._client.post(path`/mongodb/${collection}/cursor/${cursorID}/next`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface NextNextParams {
  collection: string;
}

export declare namespace Next {
  export {
    type NextNextParams as NextNextParams
  };
}
