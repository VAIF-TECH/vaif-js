// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Create extends APIResource {
  /**
   * Initiate a multipart upload
   */
  create(body: CreateCreateParams, options?: RequestOptions): APIPromise<CreateCreateResponse> {
    return this._client.post('/storage/multipart/create', { body, ...options });
  }
}

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
  export {
    type CreateCreateResponse as CreateCreateResponse,
    type CreateCreateParams as CreateCreateParams
  };
}
