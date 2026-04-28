// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseConfigure extends APIResource {
  static override readonly _key: readonly ['oauth', 'org', 'configure'] = Object.freeze([
    'oauth',
    'org',
    'configure',
  ] as const);

  /**
   * Configure OAuth for an organization
   */
  configure(
    orgID: string,
    body: ConfigureConfigureParams,
    options?: RequestOptions,
  ): APIPromise<ConfigureConfigureResponse> {
    return this._client.post(path`/oauth/org/${orgID}/configure`, { body, ...options });
  }
}
export class Configure extends BaseConfigure {}

export interface ConfigureConfigureResponse {
  message: string;

  ok: true;
}

export interface ConfigureConfigureParams {
  clientId: string;

  clientSecret: string;

  provider: 'google' | 'apple' | 'github';

  redirectUri: string;
}

export declare namespace Configure {
  export {
    type ConfigureConfigureResponse as ConfigureConfigureResponse,
    type ConfigureConfigureParams as ConfigureConfigureParams,
  };
}
