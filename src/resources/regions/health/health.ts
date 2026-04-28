// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CheckAPI from './check';
import { BaseCheck, Check } from './check';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseHealth extends APIResource {
  static override readonly _key: readonly ['regions', 'health'] = Object.freeze([
    'regions',
    'health',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/regions/health', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Health extends BaseHealth {
  check: CheckAPI.Check = new CheckAPI.Check(this._client);
}

Health.Check = Check;
Health.BaseCheck = BaseCheck;

export declare namespace Health {
  export { Check as Check, BaseCheck as BaseCheck };
}
