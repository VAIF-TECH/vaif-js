// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Settings extends APIResource {
  list(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/auth/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  patchAll(
    projectID: string,
    body: SettingPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<SettingPatchAllResponse> {
    return this._client.patch(path`/projects/${projectID}/auth/settings`, { body, ...options });
  }
}

export interface SettingPatchAllResponse {
  settings?: unknown;
}

export interface SettingPatchAllParams {
  accessTokenLifetimeMinutes?: number;

  allowedRedirectUrls?: Array<string>;

  allowPasswordRecovery?: boolean;

  allowSignUp?: boolean;

  lockoutDurationMinutes?: number;

  maxSignInAttempts?: number;

  mfaEnabled?: boolean;

  mfaEnforced?: boolean;

  minPasswordLength?: number;

  refreshTokenLifetimeDays?: number;

  requireEmailVerification?: boolean;

  requireNumbers?: boolean;

  requirePhoneVerification?: boolean;

  requireSpecialChars?: boolean;

  requireUppercase?: boolean;

  singleSessionMode?: boolean;

  userTableAutoCreate?: boolean;

  userTableName?: string | null;

  userTableSyncFields?: Array<string>;
}

export declare namespace Settings {
  export {
    type SettingPatchAllResponse as SettingPatchAllResponse,
    type SettingPatchAllParams as SettingPatchAllParams,
  };
}
