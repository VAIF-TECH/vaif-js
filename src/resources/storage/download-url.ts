// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseDownloadURL extends APIResource {
  static override readonly _key: readonly ['storage', 'downloadURL'] = Object.freeze(['storage', 'downloadURL'] as const)

  create(body: DownloadURLCreateParams, options?: RequestOptions): APIPromise<DownloadURLCreateResponse> {
    return this._client.post('/storage/download-url', { body, ...options });
  }
}
export class DownloadURL extends BaseDownloadURL {

}

export interface DownloadURLCreateResponse {
  ok: true;

  url: string;

[k: string]: unknown
}

export interface DownloadURLCreateParams {
  key: string;

  bucket?: string;
}

export declare namespace DownloadURL {
  export {
    type DownloadURLCreateResponse as DownloadURLCreateResponse,
    type DownloadURLCreateParams as DownloadURLCreateParams
  };
}
