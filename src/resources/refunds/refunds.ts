// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { BaseOrg, Org } from './org';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRefunds extends APIResource {
  static override readonly _key: readonly ['refunds'] = Object.freeze(['refunds'] as const);

  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/refunds/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Refunds extends BaseRefunds {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Refunds.Org = Org;
Refunds.BaseOrg = BaseOrg;

export declare namespace Refunds {
  export { Org as Org, BaseOrg as BaseOrg };
}
