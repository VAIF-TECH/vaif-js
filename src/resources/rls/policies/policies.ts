// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ToggleAPI from './toggle';
import { BaseToggle, Toggle } from './toggle';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePolicies extends APIResource {
  static override readonly _key: readonly ['rls', 'policies'] = Object.freeze(['rls', 'policies'] as const);

  create(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/rls/policies/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/rls/policies/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(policyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/rls/policies/${policyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(policyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/rls/policies/${policyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Policies extends BasePolicies {
  toggle: ToggleAPI.Toggle = new ToggleAPI.Toggle(this._client);
}

Policies.Toggle = Toggle;
Policies.BaseToggle = BaseToggle;

export declare namespace Policies {
  export { Toggle as Toggle, BaseToggle as BaseToggle };
}
