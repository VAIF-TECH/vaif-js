// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class BaseAccept extends APIResource {
  static override readonly _key: readonly ['orgs', 'invites', 'accept'] = Object.freeze([
    'orgs',
    'invites',
    'accept',
  ] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/orgs/invites/accept', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Accept extends BaseAccept {}
