// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ExamplesAPI from './examples';
import { BaseExamples, Examples } from './examples';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSDKs extends APIResource {
  static override readonly _key: readonly ['docs', 'sdks'] = Object.freeze(['docs', 'sdks'] as const);

  retrieve(platform: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/docs/sdks/${platform}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/docs/sdks', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class SDKs extends BaseSDKs {
  examples: ExamplesAPI.Examples = new ExamplesAPI.Examples(this._client);
}

SDKs.Examples = Examples;
SDKs.BaseExamples = BaseExamples;

export declare namespace SDKs {
  export { Examples as Examples, BaseExamples as BaseExamples };
}
