// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/storage/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(
    projectID: string,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpdateResponse> {
    return this._client.patch(path`/projects/${projectID}/storage/settings`, { body, ...options });
  }
}

export interface SettingUpdateResponse {
  settings?: unknown;

  [k: string]: unknown;
}

export interface SettingUpdateParams {
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

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
