// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrgAPI from './org';
import { Org } from './org';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Refunds extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);

  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/refunds/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Refunds.Org = Org;

export declare namespace Refunds {
  export {
    Org as Org
  };
}
