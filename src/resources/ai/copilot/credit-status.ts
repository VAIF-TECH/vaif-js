// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCreditStatus extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'creditStatus'] = Object.freeze([
    'ai',
    'copilot',
    'creditStatus',
  ] as const);

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/credit-status/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class CreditStatus extends BaseCreditStatus {}
