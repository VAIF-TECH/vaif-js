// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePromote extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'memories', 'promote'] = Object.freeze(['ai', 'copilot', 'memories', 'promote'] as const)

  promote(memoryID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/memories/${memoryID}/promote`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Promote extends BasePromote {

}
