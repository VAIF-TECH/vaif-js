// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChangePasswordAPI from './change-password';
import { BaseChangePassword, ChangePassword } from './change-password';
import * as PreferencesAPI from './preferences';
import { BasePreferences, Preferences } from './preferences';
import * as RequestAccountDeleteAPI from './request-account-delete';
import { BaseRequestAccountDelete, RequestAccountDelete } from './request-account-delete';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseMe extends APIResource {
  static override readonly _key: readonly ['users', 'me'] = Object.freeze(['users', 'me'] as const)

  update(options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/users/me', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/users/me', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Me extends BaseMe {
  changePassword: ChangePasswordAPI.ChangePassword = new ChangePasswordAPI.ChangePassword(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  requestAccountDelete: RequestAccountDeleteAPI.RequestAccountDelete = new RequestAccountDeleteAPI.RequestAccountDelete(this._client);
}

Me.ChangePassword = ChangePassword;
Me.BaseChangePassword = BaseChangePassword;
Me.Preferences = Preferences;
Me.BasePreferences = BasePreferences;
Me.RequestAccountDelete = RequestAccountDelete;
Me.BaseRequestAccountDelete = BaseRequestAccountDelete;

export declare namespace Me {
  export {
    ChangePassword as ChangePassword,
    BaseChangePassword as BaseChangePassword
  };

  export {
    Preferences as Preferences,
    BasePreferences as BasePreferences
  };

  export {
    RequestAccountDelete as RequestAccountDelete,
    BaseRequestAccountDelete as BaseRequestAccountDelete
  };
}
