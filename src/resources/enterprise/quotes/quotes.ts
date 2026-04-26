// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AcceptAPI from './accept';
import { Accept, BaseAccept } from './accept';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseQuotes extends APIResource {
  static override readonly _key: readonly ['enterprise', 'quotes'] = Object.freeze(['enterprise', 'quotes'] as const)

  retrieve(quoteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/quotes/${quoteID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Quotes extends BaseQuotes {
  accept: AcceptAPI.Accept = new AcceptAPI.Accept(this._client);
}

Quotes.Accept = Accept;
Quotes.BaseAccept = BaseAccept;

export declare namespace Quotes {
  export {
    Accept as Accept,
    BaseAccept as BaseAccept
  };
}
