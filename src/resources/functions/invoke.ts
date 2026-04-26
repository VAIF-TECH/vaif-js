// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invoke extends APIResource {
  invoke(functionIDOrName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/functions/${functionIDOrName}/invoke`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
