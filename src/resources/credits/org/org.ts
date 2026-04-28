// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BalanceAPI from './balance';
import { Balance, BaseBalance } from './balance';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['credits', 'org'] = Object.freeze(['credits', 'org'] as const);

  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/credits/org/${orgID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Org extends BaseOrg {
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);
}

Org.Balance = Balance;
Org.BaseBalance = BaseBalance;

export declare namespace Org {
  export { Balance as Balance, BaseBalance as BaseBalance };
}
