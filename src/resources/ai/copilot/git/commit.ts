// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseCommit extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'git', 'commit'] = Object.freeze([
    'ai',
    'copilot',
    'git',
    'commit',
  ] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/git/commit', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Commit extends BaseCommit {}
