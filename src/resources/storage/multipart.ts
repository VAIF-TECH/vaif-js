// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Multipart extends APIResource {
  /**
   * Initiate a multipart upload
   */
  create(body: MultipartCreateParams, options?: RequestOptions): APIPromise<MultipartCreateResponse> {
    return this._client.post('/storage/multipart/create', { body, ...options });
  }

  /**
   * Abort a multipart upload
   */
  abort(
    uploadID: string,
    body: MultipartAbortParams,
    options?: RequestOptions,
  ): APIPromise<MultipartAbortResponse> {
    return this._client.post(path`/storage/multipart/${uploadID}/abort`, { body, ...options });
  }

  /**
   * Complete a multipart upload
   */
  complete(
    uploadID: string,
    body: MultipartCompleteParams,
    options?: RequestOptions,
  ): APIPromise<MultipartCompleteResponse> {
    return this._client.post(path`/storage/multipart/${uploadID}/complete`, { body, ...options });
  }

  /**
   * Get a signed URL for uploading a part
   */
  getPartURL(
    uploadID: string,
    body: MultipartGetPartURLParams,
    options?: RequestOptions,
  ): APIPromise<MultipartGetPartURLResponse> {
    return this._client.post(path`/storage/multipart/${uploadID}/part-url`, { body, ...options });
  }
}

export interface MultipartCreateResponse {
  key: string;

  ok: true;

  uploadId: string;
}

export interface MultipartAbortResponse {
  ok: true;
}

export interface MultipartCompleteResponse {
  key: string;

  ok: true;
}

export interface MultipartGetPartURLResponse {
  ok: true;

  partNumber: number;

  url: string;
}

export interface MultipartCreateParams {
  bucketId: string;

  key: string;

  contentType?: string;
}

export interface MultipartAbortParams {
  bucketId: string;

  key: string;
}

export interface MultipartCompleteParams {
  bucketId: string;

  key: string;

  parts: Array<MultipartCompleteParams.Part>;
}

export namespace MultipartCompleteParams {
  export interface Part {
    ETag: string;

    PartNumber: number;
  }
}

export interface MultipartGetPartURLParams {
  bucketId: string;

  key: string;

  partNumber: number;
}

export declare namespace Multipart {
  export {
    type MultipartCreateResponse as MultipartCreateResponse,
    type MultipartAbortResponse as MultipartAbortResponse,
    type MultipartCompleteResponse as MultipartCompleteResponse,
    type MultipartGetPartURLResponse as MultipartGetPartURLResponse,
    type MultipartCreateParams as MultipartCreateParams,
    type MultipartAbortParams as MultipartAbortParams,
    type MultipartCompleteParams as MultipartCompleteParams,
    type MultipartGetPartURLParams as MultipartGetPartURLParams,
  };
}
