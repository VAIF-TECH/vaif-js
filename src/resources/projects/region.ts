// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRegion extends APIResource {
  static override readonly _key: readonly ['projects', 'region'] = Object.freeze([
    'projects',
    'region',
  ] as const);

  getRegion(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/region`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  region(
    projectID: string,
    body: RegionRegionParams,
    options?: RequestOptions,
  ): APIPromise<RegionRegionResponse> {
    return this._client.post(path`/projects/${projectID}/region`, { body, ...options });
  }
}
export class Region extends BaseRegion {}

export interface RegionRegionResponse {
  ok: true;

  projectId: string;

  regionKey: string;

  tenancyType: string;

  [k: string]: unknown;
}

export interface RegionRegionParams {
  regionKey: string;

  tenancyType: 'shared' | 'dedicated_db' | 'dedicated_stack';
}

export declare namespace Region {
  export { type RegionRegionResponse as RegionRegionResponse, type RegionRegionParams as RegionRegionParams };
}
