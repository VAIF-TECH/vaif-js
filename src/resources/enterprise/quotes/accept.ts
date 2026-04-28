// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAccept extends APIResource {
  static override readonly _key: readonly ['enterprise', 'quotes', 'accept'] = Object.freeze([
    'enterprise',
    'quotes',
    'accept',
  ] as const);

  accept(quoteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/enterprise/quotes/${quoteID}/accept`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Accept extends BaseAccept {}
