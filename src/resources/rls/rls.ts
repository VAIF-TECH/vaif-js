// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoliciesAPI from './policies/policies';
import { Policies } from './policies/policies';

export class Rls extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

Rls.Policies = Policies;

export declare namespace Rls {
  export {
    Policies as Policies
  };
}
