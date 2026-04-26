// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseResume extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'generation', 'resume'] = Object.freeze(['ai', 'copilot', 'generation', 'resume'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/generation/resume', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Resume extends BaseResume {

}
