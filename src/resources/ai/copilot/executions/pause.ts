// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePause extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'executions', 'pause'] = Object.freeze(['ai', 'copilot', 'executions', 'pause'] as const)

  pause(executionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/execution/${executionID}/pause`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Pause extends BasePause {

}
