// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Project extends APIResource {
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/project', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
