// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['functions', 'logs'] = Object.freeze(['functions', 'logs'] as const)

  getLogs(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/logs`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Logs extends BaseLogs {

}
