// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Find extends APIResource {
  cursor(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/find/cursor`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  find(collection: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/mongodb/${collection}/find`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
