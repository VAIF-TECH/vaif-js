// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Region extends APIResource {
  create(
    projectID: string,
    body: RegionCreateParams,
    options?: RequestOptions,
  ): APIPromise<RegionCreateResponse> {
    return this._client.post(path`/projects/${projectID}/region`, { body, ...options });
  }

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/region`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RegionCreateResponse {
  ok: true;

  projectId: string;

  regionKey: string;

  tenancyType: string;

  [k: string]: unknown;
}

export interface RegionCreateParams {
  regionKey: string;

  tenancyType: 'shared' | 'dedicated_db' | 'dedicated_stack';
}

export declare namespace Region {
  export { type RegionCreateResponse as RegionCreateResponse, type RegionCreateParams as RegionCreateParams };
}
