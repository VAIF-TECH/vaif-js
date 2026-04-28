// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BasePreferences extends APIResource {
  static override readonly _key: readonly ['users', 'me', 'preferences'] = Object.freeze([
    'users',
    'me',
    'preferences',
  ] as const);

  update(options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/users/me/preferences', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/users/me/preferences', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Preferences extends BasePreferences {}
