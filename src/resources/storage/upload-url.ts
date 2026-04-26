// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseUploadURL extends APIResource {
  static override readonly _key: readonly ['storage', 'uploadURL'] = Object.freeze(['storage', 'uploadURL'] as const)

  create(body: UploadURLCreateParams, options?: RequestOptions): APIPromise<UploadURLCreateResponse> {
    return this._client.post('/storage/upload-url', { body, ...options });
  }
}
export class UploadURL extends BaseUploadURL {

}

export interface UploadURLCreateResponse {
  ok: true;

  url: string;

[k: string]: unknown
}

export interface UploadURLCreateParams {
  key: string;

  bucket?: string;

  sizeBytes?: number;
}

export declare namespace UploadURL {
  export {
    type UploadURLCreateResponse as UploadURLCreateResponse,
    type UploadURLCreateParams as UploadURLCreateParams
  };
}
