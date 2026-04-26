// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseChangelog extends APIResource {
  static override readonly _key: readonly ['docs', 'changelog'] = Object.freeze(['docs', 'changelog'] as const)

  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/changelog/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/changelog', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Changelog extends BaseChangelog {

}
