// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseUploadBase64 extends APIResource {
  static override readonly _key: readonly ['storage', 'uploadBase64'] = Object.freeze(['storage', 'uploadBase64'] as const)

  create(body: UploadBase64CreateParams, options?: RequestOptions): APIPromise<UploadBase64CreateResponse> {
    return this._client.post('/storage/upload-base64', { body, ...options });
  }
}
export class UploadBase64 extends BaseUploadBase64 {

}

export interface UploadBase64CreateResponse {
  key: string;

  ok: true;

  sizeBytes: number;

[k: string]: unknown
}

export interface UploadBase64CreateParams {
  bucket: string;

  data: string;

  path: string;

  projectId: string;

  contentType?: string;
}

export declare namespace UploadBase64 {
  export {
    type UploadBase64CreateResponse as UploadBase64CreateResponse,
    type UploadBase64CreateParams as UploadBase64CreateParams
  };
}
