// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pages extends APIResource {
  retrieve(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/cms/pages/${slug}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
