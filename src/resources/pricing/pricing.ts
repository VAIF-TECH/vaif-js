// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlansAPI from './plans';
import { Plans } from './plans';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Pricing extends APIResource {
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);

  aiFeatures(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/pricing/ai-features', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  compare(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/pricing/compare', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  enterprise(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/pricing/enterprise', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Pricing.Plans = Plans;

export declare namespace Pricing {
  export { Plans as Plans };
}
