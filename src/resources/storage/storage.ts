// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MultipartAPI from './multipart';
import {
  Multipart,
  MultipartAbortParams,
  MultipartAbortResponse,
  MultipartCompleteParams,
  MultipartCompleteResponse,
  MultipartCreateParams,
  MultipartCreateResponse,
  MultipartGetPartURLParams,
  MultipartGetPartURLResponse,
} from './multipart';
import * as BucketsAPI from './buckets/buckets';
import { BucketCreateParams, BucketCreateResponse, Buckets } from './buckets/buckets';
import * as FilesAPI from './files/files';
import { Files } from './files/files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Storage extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  multipart: MultipartAPI.Multipart = new MultipartAPI.Multipart(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  download(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/storage/download', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  downloadURL(
    body: StorageDownloadURLParams,
    options?: RequestOptions,
  ): APIPromise<StorageDownloadURLResponse> {
    return this._client.post('/storage/download-url', { body, ...options });
  }

  upload(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/storage/upload', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  uploadBase64(
    body: StorageUploadBase64Params,
    options?: RequestOptions,
  ): APIPromise<StorageUploadBase64Response> {
    return this._client.post('/storage/upload-base64', { body, ...options });
  }

  uploadFromURL(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/storage/upload-from-url', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  uploadURL(body: StorageUploadURLParams, options?: RequestOptions): APIPromise<StorageUploadURLResponse> {
    return this._client.post('/storage/upload-url', { body, ...options });
  }
}

export interface StorageDownloadURLResponse {
  ok: true;

  url: string;

  [k: string]: unknown;
}

export interface StorageUploadBase64Response {
  key: string;

  ok: true;

  sizeBytes: number;

  [k: string]: unknown;
}

export interface StorageUploadURLResponse {
  ok: true;

  url: string;

  [k: string]: unknown;
}

export interface StorageDownloadURLParams {
  key: string;

  bucket?: string;
}

export interface StorageUploadBase64Params {
  bucket: string;

  data: string;

  path: string;

  projectId: string;

  contentType?: string;
}

export interface StorageUploadURLParams {
  key: string;

  bucket?: string;

  sizeBytes?: number;
}

Storage.Buckets = Buckets;
Storage.Multipart = Multipart;
Storage.Files = Files;

export declare namespace Storage {
  export {
    type StorageDownloadURLResponse as StorageDownloadURLResponse,
    type StorageUploadBase64Response as StorageUploadBase64Response,
    type StorageUploadURLResponse as StorageUploadURLResponse,
    type StorageDownloadURLParams as StorageDownloadURLParams,
    type StorageUploadBase64Params as StorageUploadBase64Params,
    type StorageUploadURLParams as StorageUploadURLParams,
  };

  export {
    Buckets as Buckets,
    type BucketCreateResponse as BucketCreateResponse,
    type BucketCreateParams as BucketCreateParams,
  };

  export {
    Multipart as Multipart,
    type MultipartCreateResponse as MultipartCreateResponse,
    type MultipartAbortResponse as MultipartAbortResponse,
    type MultipartCompleteResponse as MultipartCompleteResponse,
    type MultipartGetPartURLResponse as MultipartGetPartURLResponse,
    type MultipartCreateParams as MultipartCreateParams,
    type MultipartAbortParams as MultipartAbortParams,
    type MultipartCompleteParams as MultipartCompleteParams,
    type MultipartGetPartURLParams as MultipartGetPartURLParams,
  };

  export { Files as Files };
}
