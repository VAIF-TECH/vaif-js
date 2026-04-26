// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Org extends APIResource {
  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/onboarding/org/${orgID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  autoSetup(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/onboarding/org/${orgID}/auto-setup`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  completeStep(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/onboarding/org/${orgID}/complete-step`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
