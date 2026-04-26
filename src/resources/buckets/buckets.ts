// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { Files } from './files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Buckets extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  retrieve(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/buckets/${bucketID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(
    bucketID: string,
    body: BucketUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BucketUpdateResponse> {
    return this._client.put(path`/buckets/${bucketID}`, { body, ...options });
  }

  delete(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/buckets/${bucketID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createSignedURL(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/buckets/${bucketID}/signed-url`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createUploadURL(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/buckets/${bucketID}/upload-url`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveByProject(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/buckets/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  upload(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/buckets/${bucketID}/upload`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BucketUpdateResponse {
  ok: true;

  bucket?: unknown;

  [k: string]: unknown;
}

export interface BucketUpdateParams {
  allowedMimeTypes?: Array<string> | null;

  corsOrigins?: Array<string> | null;

  fileSizeLimit?: number;

  public?: boolean;
}

Buckets.Files = Files;

export declare namespace Buckets {
  export { type BucketUpdateResponse as BucketUpdateResponse, type BucketUpdateParams as BucketUpdateParams };

  export { Files as Files };
}
