// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Resolve extends APIResource {
  /**
   * Resolve an incident
   */
  resolve(incidentID: string, options?: RequestOptions): APIPromise<ResolveResolveResponse> {
    return this._client.post(path`/incidents/${incidentID}/resolve`, options);
  }
}

export interface ResolveResolveResponse {
  ok: true;
}

export declare namespace Resolve {
  export {
    type ResolveResolveResponse as ResolveResolveResponse
  };
}
