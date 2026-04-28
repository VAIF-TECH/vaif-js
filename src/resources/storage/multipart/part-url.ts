// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePartURL extends APIResource {
  static override readonly _key: readonly ['storage', 'multipart', 'partURL'] = Object.freeze([
    'storage',
    'multipart',
    'partURL',
  ] as const);

  /**
   * Get a signed URL for uploading a part
   */
  partURL(
    uploadID: string,
    body: PartURLPartURLParams,
    options?: RequestOptions,
  ): APIPromise<PartURLPartURLResponse> {
    return this._client.post(path`/storage/multipart/${uploadID}/part-url`, { body, ...options });
  }
}
export class PartURL extends BasePartURL {}

export interface PartURLPartURLResponse {
  ok: true;

  partNumber: number;

  url: string;
}

export interface PartURLPartURLParams {
  bucketId: string;

  key: string;

  partNumber: number;
}

export declare namespace PartURL {
  export {
    type PartURLPartURLResponse as PartURLPartURLResponse,
    type PartURLPartURLParams as PartURLPartURLParams,
  };
}
