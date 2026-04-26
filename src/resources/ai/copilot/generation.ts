// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Generation extends APIResource {
  cancel(manifestID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/generation/${manifestID}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  resume(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/generation/resume', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
