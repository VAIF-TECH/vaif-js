// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseStorage extends APIResource {
  static override readonly _key: readonly ['projects', 'storage'] = Object.freeze(['projects', 'storage'] as const)

  getSettings(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/storage/settings`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  settings(projectID: string, body: StorageSettingsParams, options?: RequestOptions): APIPromise<StorageSettingsResponse> {
    return this._client.patch(path`/projects/${projectID}/storage/settings`, { body, ...options });
  }
}
export class Storage extends BaseStorage {

}

export interface StorageSettingsResponse {
  settings?: unknown;

[k: string]: unknown
}

export interface StorageSettingsParams {
  allowedMimeTypes?: Array<string> | null;

  allowedTransforms?: Array<string>;

  blockedMimeTypes?: Array<string>;

  cdnEnabled?: boolean;

  defaultCacheTtl?: number;

  defaultFileSizeLimit?: number;

  edgeCachingEnabled?: boolean;

  enableImageTransform?: boolean;

  maxFileSizeLimit?: number;

  maxImageDimension?: number;

  signedUrlDefaultExpiry?: number;

  signedUrlMaxExpiry?: number;

  webhookEnabled?: boolean;

  webhookEvents?: Array<string>;

  webhookUrl?: string | null;
}

export declare namespace Storage {
  export {
    type StorageSettingsResponse as StorageSettingsResponse,
    type StorageSettingsParams as StorageSettingsParams
  };
}
