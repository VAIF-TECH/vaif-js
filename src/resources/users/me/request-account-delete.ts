// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class RequestAccountDelete extends APIResource {
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/users/me/request-account-delete', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
