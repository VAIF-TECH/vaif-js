// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org/org';
import { Org, OrgConfigureParams, OrgConfigureResponse, OrgListResponse } from './org/org';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class OAuth extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);

  /**
   * Handle OAuth callback and exchange code for tokens
   */
  handleCallback(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/oauth/callback', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

OAuth.Org = Org;

export declare namespace OAuth {
  export {
    Org as Org,
    type OrgListResponse as OrgListResponse,
    type OrgConfigureResponse as OrgConfigureResponse,
    type OrgConfigureParams as OrgConfigureParams,
  };
}
