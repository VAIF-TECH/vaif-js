// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SDKs extends APIResource {
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/sdks', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveByPlatform(platform: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/sdks/${platform}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveExamples(sdkID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/sdks/${sdkID}/examples`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
