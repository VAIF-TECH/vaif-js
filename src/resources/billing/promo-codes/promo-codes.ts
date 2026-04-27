// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ValidateAPI from './validate';
import { BaseValidate, Validate, ValidateCreateParams, ValidateCreateResponse } from './validate';

export class BasePromoCodes extends APIResource {
  static override readonly _key: readonly ['billing', 'promoCodes'] = Object.freeze(['billing', 'promoCodes'] as const)

}
export class PromoCodes extends BasePromoCodes {
  validate: ValidateAPI.Validate = new ValidateAPI.Validate(this._client);
}

PromoCodes.Validate = Validate;
PromoCodes.BaseValidate = BaseValidate;

export declare namespace PromoCodes {
  export {
    Validate as Validate,
    BaseValidate as BaseValidate,
    type ValidateCreateResponse as ValidateCreateResponse,
    type ValidateCreateParams as ValidateCreateParams
  };
}
