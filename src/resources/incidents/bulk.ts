// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseBulk extends APIResource {
  static override readonly _key: readonly ['incidents', 'bulk'] = Object.freeze([
    'incidents',
    'bulk',
  ] as const);

  /**
   * Bulk acknowledge or resolve incidents
   */
  create(body: BulkCreateParams, options?: RequestOptions): APIPromise<BulkCreateResponse> {
    return this._client.post('/incidents/bulk', { body, ...options });
  }
}
export class Bulk extends BaseBulk {}

export interface BulkCreateResponse {
  ok: true;

  updated: number;
}

export interface BulkCreateParams {
  action: 'acknowledge' | 'resolve';

  ids: Array<string>;
}

export declare namespace Bulk {
  export { type BulkCreateResponse as BulkCreateResponse, type BulkCreateParams as BulkCreateParams };
}
