// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoliciesAPI from './policies/policies';
import { BasePolicies, Policies } from './policies/policies';

export class BaseRls extends APIResource {
  static override readonly _key: readonly ['rls'] = Object.freeze(['rls'] as const)

}
export class Rls extends BaseRls {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

Rls.Policies = Policies;
Rls.BasePolicies = BasePolicies;

export declare namespace Rls {
  export {
    Policies as Policies,
    BasePolicies as BasePolicies
  };
}
