// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRate extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'rate'] = Object.freeze(['ai', 'copilot', 'rate'] as const)

  create(messageID: string, body: RateCreateParams, options?: RequestOptions): APIPromise<RateCreateResponse> {
    return this._client.post(path`/ai/copilot/rate/${messageID}`, { body, ...options });
  }
}
export class Rate extends BaseRate {

}

export interface RateCreateResponse {
  ok: true;
}

export interface RateCreateParams {
  rating: number;

  approved?: boolean;

  feedback?: string;
}

export declare namespace Rate {
  export {
    type RateCreateResponse as RateCreateResponse,
    type RateCreateParams as RateCreateParams
  };
}
