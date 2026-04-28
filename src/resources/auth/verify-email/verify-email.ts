// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfirmAPI from './confirm';
import { BaseConfirm, Confirm, ConfirmCreateParams, ConfirmCreateResponse } from './confirm';
import * as SendAPI from './send';
import { BaseSend, Send, SendCreateResponse } from './send';

export class BaseVerifyEmail extends APIResource {
  static override readonly _key: readonly ['auth', 'verifyEmail'] = Object.freeze([
    'auth',
    'verifyEmail',
  ] as const);
}
export class VerifyEmail extends BaseVerifyEmail {
  confirm: ConfirmAPI.Confirm = new ConfirmAPI.Confirm(this._client);
  send: SendAPI.Send = new SendAPI.Send(this._client);
}

VerifyEmail.Confirm = Confirm;
VerifyEmail.BaseConfirm = BaseConfirm;
VerifyEmail.Send = Send;
VerifyEmail.BaseSend = BaseSend;

export declare namespace VerifyEmail {
  export {
    Confirm as Confirm,
    BaseConfirm as BaseConfirm,
    type ConfirmCreateResponse as ConfirmCreateResponse,
    type ConfirmCreateParams as ConfirmCreateParams,
  };

  export { Send as Send, BaseSend as BaseSend, type SendCreateResponse as SendCreateResponse };
}
