// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metadata extends APIResource {
  retrieve(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/storage/files/${bucketID}/metadata`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/storage/files/${bucketID}/metadata`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
