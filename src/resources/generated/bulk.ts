// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bulk extends APIResource {
  create(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/generated/${table}/bulk`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/generated/${table}/bulk`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(table: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/generated/${table}/bulk`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
