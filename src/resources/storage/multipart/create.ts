// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseCreate extends APIResource {
  static override readonly _key: readonly ['storage', 'multipart', 'create'] = Object.freeze([
    'storage',
    'multipart',
    'create',
  ] as const);

  /**
   * Initiate a multipart upload
   */
  create(body: CreateCreateParams, options?: RequestOptions): APIPromise<CreateCreateResponse> {
    return this._client.post('/storage/multipart/create', { body, ...options });
  }
}
export class Create extends BaseCreate {}

export interface CreateCreateResponse {
  key: string;

  ok: true;

  uploadId: string;
}

export interface CreateCreateParams {
  bucketId: string;

  key: string;

  contentType?: string;
}

export declare namespace Create {
  export { type CreateCreateResponse as CreateCreateResponse, type CreateCreateParams as CreateCreateParams };
}
