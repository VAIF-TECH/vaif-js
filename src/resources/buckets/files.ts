// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseFiles extends APIResource {
  static override readonly _key: readonly ['buckets', 'files'] = Object.freeze(['buckets', 'files'] as const)

  files(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/buckets/${bucketID}/files`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getFiles(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/buckets/${bucketID}/files`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Files extends BaseFiles {

}
