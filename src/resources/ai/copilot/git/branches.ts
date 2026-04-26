// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseBranches extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'git', 'branches'] = Object.freeze(['ai', 'copilot', 'git', 'branches'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/branch', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/git/branches/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Branches extends BaseBranches {

}
