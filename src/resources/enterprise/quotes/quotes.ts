// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AcceptAPI from './accept';
import { Accept } from './accept';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Quotes extends APIResource {
  accept: AcceptAPI.Accept = new AcceptAPI.Accept(this._client);

  retrieve(quoteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/quotes/${quoteID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Quotes.Accept = Accept;

export declare namespace Quotes {
  export {
    Accept as Accept
  };
}
