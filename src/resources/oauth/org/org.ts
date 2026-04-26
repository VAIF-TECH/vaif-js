// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProviderAPI from './provider';
import {
  Provider,
  ProviderAuthorizeParams,
  ProviderAuthorizeResponse,
  ProviderDeleteParams,
  ProviderDeleteResponse,
  ProviderRefreshParams,
  ProviderRefreshResponse,
  ProviderUpdateParams,
  ProviderUpdateResponse,
} from './provider';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Org extends APIResource {
  provider: ProviderAPI.Provider = new ProviderAPI.Provider(this._client);

  /**
   * List OAuth configurations for an organization
   */
  list(orgID: string, options?: RequestOptions): APIPromise<OrgListResponse> {
    return this._client.get(path`/oauth/org/${orgID}`, options);
  }

  /**
   * Configure OAuth for an organization
   */
  configure(
    orgID: string,
    body: OrgConfigureParams,
    options?: RequestOptions,
  ): APIPromise<OrgConfigureResponse> {
    return this._client.post(path`/oauth/org/${orgID}/configure`, { body, ...options });
  }
}

export interface OrgListResponse {
  connections: Array<OrgListResponse.Connection>;
}

export namespace OrgListResponse {
  export interface Connection {
    id: string;

    clientId: string;

    createdAt: string | (string & {});

    enabled: boolean;

    provider: string;

    redirectUri: string;
  }
}

export interface OrgConfigureResponse {
  message: string;

  ok: true;
}

export interface OrgConfigureParams {
  clientId: string;

  clientSecret: string;

  provider: 'google' | 'apple' | 'github';

  redirectUri: string;
}

Org.Provider = Provider;

export declare namespace Org {
  export {
    type OrgListResponse as OrgListResponse,
    type OrgConfigureResponse as OrgConfigureResponse,
    type OrgConfigureParams as OrgConfigureParams,
  };

  export {
    Provider as Provider,
    type ProviderUpdateResponse as ProviderUpdateResponse,
    type ProviderDeleteResponse as ProviderDeleteResponse,
    type ProviderAuthorizeResponse as ProviderAuthorizeResponse,
    type ProviderRefreshResponse as ProviderRefreshResponse,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderDeleteParams as ProviderDeleteParams,
    type ProviderAuthorizeParams as ProviderAuthorizeParams,
    type ProviderRefreshParams as ProviderRefreshParams,
  };
}
