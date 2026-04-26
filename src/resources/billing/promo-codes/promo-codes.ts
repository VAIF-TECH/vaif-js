// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ValidateAPI from './validate';
import { Validate, ValidateCreateParams, ValidateCreateResponse } from './validate';

export class PromoCodes extends APIResource {
  validate: ValidateAPI.Validate = new ValidateAPI.Validate(this._client);
}

PromoCodes.Validate = Validate;

export declare namespace PromoCodes {
  export {
    Validate as Validate,
    type ValidateCreateResponse as ValidateCreateResponse,
    type ValidateCreateParams as ValidateCreateParams
  };
}
