// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAbort extends APIResource {
  static override readonly _key: readonly ['storage', 'multipart', 'abort'] = Object.freeze(['storage', 'multipart', 'abort'] as const)

  /**
   * Abort a multipart upload
   */
  abort(uploadID: string, body: AbortAbortParams, options?: RequestOptions): APIPromise<AbortAbortResponse> {
    return this._client.post(path`/storage/multipart/${uploadID}/abort`, { body, ...options });
  }
}
export class Abort extends BaseAbort {

}

export interface AbortAbortResponse {
  ok: true;
}

export interface AbortAbortParams {
  bucketId: string;

  key: string;
}

export declare namespace Abort {
  export {
    type AbortAbortResponse as AbortAbortResponse,
    type AbortAbortParams as AbortAbortParams
  };
}
