// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePages extends APIResource {
  static override readonly _key: readonly ['docs', 'v2', 'pages'] = Object.freeze(['docs', 'v2', 'pages'] as const)

  retrieve(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/v2/pages/${slug}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/v2/pages', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Pages extends BasePages {

}
