// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseFunction extends APIResource {
  static override readonly _key: readonly ['functions', 'invocations', 'function'] = Object.freeze(['functions', 'invocations', 'function'] as const)

  retrieve(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/invocations/function/${functionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Function extends BaseFunction {

}
