// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChangePasswordAPI from './change-password';
import { ChangePassword } from './change-password';
import * as PreferencesAPI from './preferences';
import { Preferences } from './preferences';
import * as RequestAccountDeleteAPI from './request-account-delete';
import { RequestAccountDelete } from './request-account-delete';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  changePassword: ChangePasswordAPI.ChangePassword = new ChangePasswordAPI.ChangePassword(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  requestAccountDelete: RequestAccountDeleteAPI.RequestAccountDelete = new RequestAccountDeleteAPI.RequestAccountDelete(this._client);

  update(options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/users/me', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/users/me', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Me.ChangePassword = ChangePassword;
Me.Preferences = Preferences;
Me.RequestAccountDelete = RequestAccountDelete;

export declare namespace Me {
  export {
    ChangePassword as ChangePassword
  };

  export {
    Preferences as Preferences
  };

  export {
    RequestAccountDelete as RequestAccountDelete
  };
}
