// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRollback extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'deploy', 'rollback'] = Object.freeze([
    'ai',
    'copilot',
    'deploy',
    'rollback',
  ] as const);

  /**
   * Rollback a deploy (SSE stream)
   */
  rollback(deployID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/deploy/${deployID}/rollback`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Rollback extends BaseRollback {}
