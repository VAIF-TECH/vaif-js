// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSignedURL extends APIResource {
  static override readonly _key: readonly ['buckets', 'signedURL'] = Object.freeze(['buckets', 'signedURL'] as const)

  signedURL(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/buckets/${bucketID}/signed-url`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class SignedURL extends BaseSignedURL {

}
