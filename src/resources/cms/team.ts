// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseTeam extends APIResource {
  static override readonly _key: readonly ['cms', 'team'] = Object.freeze(['cms', 'team'] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/cms/team', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Team extends BaseTeam {}
