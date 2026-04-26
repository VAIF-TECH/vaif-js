// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Install extends APIResource {
  apply(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templates/install/apply', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  preview(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templates/install/preview', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  rollback(installID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/templates/install/${installID}/rollback`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
