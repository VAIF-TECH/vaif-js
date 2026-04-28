// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAutoSetup extends APIResource {
  static override readonly _key: readonly ['onboarding', 'org', 'autoSetup'] = Object.freeze([
    'onboarding',
    'org',
    'autoSetup',
  ] as const);

  autoSetup(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/onboarding/org/${orgID}/auto-setup`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class AutoSetup extends BaseAutoSetup {}
