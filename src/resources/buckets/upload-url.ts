// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUploadURL extends APIResource {
  static override readonly _key: readonly ['buckets', 'uploadURL'] = Object.freeze([
    'buckets',
    'uploadURL',
  ] as const);

  uploadURL(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/buckets/${bucketID}/upload-url`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class UploadURL extends BaseUploadURL {}
