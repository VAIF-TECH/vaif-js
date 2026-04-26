// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PreferencesAPI from './preferences';
import { Preferences } from './preferences';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);

  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/users/me', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/users/me', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  changePassword(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/users/me/change-password', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  requestAccountDelete(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/users/me/request-account-delete', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Me.Preferences = Preferences;

export declare namespace Me {
  export { Preferences as Preferences };
}
