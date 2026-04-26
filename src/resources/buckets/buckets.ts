// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { Files } from './files';
import * as ProjectAPI from './project';
import { Project } from './project';
import * as SignedURLAPI from './signed-url';
import { SignedURL } from './signed-url';
import * as UploadAPI from './upload';
import { Upload } from './upload';
import * as UploadURLAPI from './upload-url';
import { UploadURL } from './upload-url';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Buckets extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  signedURL: SignedURLAPI.SignedURL = new SignedURLAPI.SignedURL(this._client);
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);
  uploadURL: UploadURLAPI.UploadURL = new UploadURLAPI.UploadURL(this._client);

  retrieve(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/buckets/${bucketID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  update(bucketID: string, body: BucketUpdateParams, options?: RequestOptions): APIPromise<BucketUpdateResponse> {
    return this._client.put(path`/buckets/${bucketID}`, { body, ...options });
  }

  delete(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/buckets/${bucketID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface BucketUpdateResponse {
  ok: true;

  bucket?: unknown;

[k: string]: unknown
}

export interface BucketUpdateParams {
  allowedMimeTypes?: Array<string> | null;

  corsOrigins?: Array<string> | null;

  fileSizeLimit?: number;

  public?: boolean;
}

Buckets.Files = Files;
Buckets.Project = Project;
Buckets.SignedURL = SignedURL;
Buckets.Upload = Upload;
Buckets.UploadURL = UploadURL;

export declare namespace Buckets {
  export {
    type BucketUpdateResponse as BucketUpdateResponse,
    type BucketUpdateParams as BucketUpdateParams
  };

  export {
    Files as Files
  };

  export {
    Project as Project
  };

  export {
    SignedURL as SignedURL
  };

  export {
    Upload as Upload
  };

  export {
    UploadURL as UploadURL
  };
}
