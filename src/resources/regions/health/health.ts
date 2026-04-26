// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CheckAPI from './check';
import { Check } from './check';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Health extends APIResource {
  check: CheckAPI.Check = new CheckAPI.Check(this._client);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/regions/health', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Health.Check = Check;

export declare namespace Health {
  export {
    Check as Check
  };
}
