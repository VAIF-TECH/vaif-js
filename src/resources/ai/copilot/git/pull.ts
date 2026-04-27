// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BasePull extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'git', 'pull'] = Object.freeze(['ai', 'copilot', 'git', 'pull'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/pull', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Pull extends BasePull {

}
