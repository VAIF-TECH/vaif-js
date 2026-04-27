// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseExamples extends APIResource {
  static override readonly _key: readonly ['docs', 'examples'] = Object.freeze(['docs', 'examples'] as const)

  retrieve(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/examples/${slug}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/examples', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Examples extends BaseExamples {

}
