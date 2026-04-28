// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCompleteStep extends APIResource {
  static override readonly _key: readonly ['onboarding', 'org', 'completeStep'] = Object.freeze([
    'onboarding',
    'org',
    'completeStep',
  ] as const);

  completeStep(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/onboarding/org/${orgID}/complete-step`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class CompleteStep extends BaseCompleteStep {}
