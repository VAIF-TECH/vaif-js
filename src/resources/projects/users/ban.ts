// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Ban extends APIResource {
  ban(userID: string, params: BanBanParams, options?: RequestOptions): APIPromise<BanBanResponse> {
    const { projectId, ...body } = params
    return this._client.post(path`/projects/${projectId}/users/${userID}/ban`, { body, ...options });
  }
}

export interface BanBanResponse {
  success: true;
}

export interface BanBanParams {
  /**
   * Path param
   */
  projectId: string;

  /**
   * Body param
   */
  reason?: string;
}

export declare namespace Ban {
  export {
    type BanBanResponse as BanBanResponse,
    type BanBanParams as BanBanParams
  };
}
