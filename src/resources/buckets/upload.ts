// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUpload extends APIResource {
  static override readonly _key: readonly ['buckets', 'upload'] = Object.freeze(['buckets', 'upload'] as const)

  upload(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/buckets/${bucketID}/upload`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Upload extends BaseUpload {

}
