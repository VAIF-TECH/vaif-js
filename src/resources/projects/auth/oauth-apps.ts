// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OAuthApps extends APIResource {
  update(
    provider: string,
    params: OAuthAppUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OAuthAppUpdateResponse> {
    const { projectId, ...body } = params;
    return this._client.put(path`/projects/${projectId}/auth/oauth-apps/${provider}`, { body, ...options });
  }

  delete(provider: string, params: OAuthAppDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/auth/oauth-apps/${provider}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveOAuthApps(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/auth/oauth-apps`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OAuthAppUpdateResponse {
  app: OAuthAppUpdateResponse.App;
}

export namespace OAuthAppUpdateResponse {
  export interface App {
    id: string;

    clientId: string;

    createdAt: string | (string & {}) | null;

    enabled: boolean | null;

    provider: string;

    redirectUri: string | null;

    updatedAt: string | (string & {}) | null;

    scopes?: unknown;

    [k: string]: unknown;
  }
}

export interface OAuthAppUpdateParams {
  /**
   * Path param
   */
  projectId: string;

  /**
   * Body param
   */
  clientId: string;

  /**
   * Body param
   */
  clientSecret: string;

  /**
   * Body param
   */
  redirectUri: string;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  scopes?: Array<string>;
}

export interface OAuthAppDeleteParams {
  projectId: string;
}

export declare namespace OAuthApps {
  export {
    type OAuthAppUpdateResponse as OAuthAppUpdateResponse,
    type OAuthAppUpdateParams as OAuthAppUpdateParams,
    type OAuthAppDeleteParams as OAuthAppDeleteParams,
  };
}
