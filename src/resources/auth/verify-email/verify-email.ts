// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfirmAPI from './confirm';
import { Confirm, ConfirmCreateParams, ConfirmCreateResponse } from './confirm';
import * as SendAPI from './send';
import { Send, SendCreateResponse } from './send';

export class VerifyEmail extends APIResource {
  confirm: ConfirmAPI.Confirm = new ConfirmAPI.Confirm(this._client);
  send: SendAPI.Send = new SendAPI.Send(this._client);
}

VerifyEmail.Confirm = Confirm;
VerifyEmail.Send = Send;

export declare namespace VerifyEmail {
  export {
    Confirm as Confirm,
    type ConfirmCreateResponse as ConfirmCreateResponse,
    type ConfirmCreateParams as ConfirmCreateParams
  };

  export {
    Send as Send,
    type SendCreateResponse as SendCreateResponse
  };
}
