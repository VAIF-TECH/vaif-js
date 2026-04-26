// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Examples extends APIResource {
  getExamples(sdkID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/sdks/${sdkID}/examples`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
