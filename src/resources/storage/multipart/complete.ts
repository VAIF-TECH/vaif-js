// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseComplete extends APIResource {
  static override readonly _key: readonly ['storage', 'multipart', 'complete'] = Object.freeze([
    'storage',
    'multipart',
    'complete',
  ] as const);

  /**
   * Complete a multipart upload
   */
  complete(
    uploadID: string,
    body: CompleteCompleteParams,
    options?: RequestOptions,
  ): APIPromise<CompleteCompleteResponse> {
    return this._client.post(path`/storage/multipart/${uploadID}/complete`, { body, ...options });
  }
}
export class Complete extends BaseComplete {}

export interface CompleteCompleteResponse {
  key: string;

  ok: true;
}

export interface CompleteCompleteParams {
  bucketId: string;

  key: string;

  parts: Array<CompleteCompleteParams.Part>;
}

export namespace CompleteCompleteParams {
  export interface Part {
    ETag: string;

    PartNumber: number;
  }
}

export declare namespace Complete {
  export {
    type CompleteCompleteResponse as CompleteCompleteResponse,
    type CompleteCompleteParams as CompleteCompleteParams,
  };
}
