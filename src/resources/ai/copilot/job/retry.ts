// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRetry extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'job', 'retry'] = Object.freeze(['ai', 'copilot', 'job', 'retry'] as const)

  retry(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/job/${jobID}/retry`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Retry extends BaseRetry {

}
