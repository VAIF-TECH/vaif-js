// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseAtom extends APIResource {
  static override readonly _key: readonly ['status', 'atom'] = Object.freeze(['status', 'atom'] as const);

  /**
   * Atom feed for incidents
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/status/atom', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Atom extends BaseAtom {}
