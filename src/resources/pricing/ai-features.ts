// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseAIFeatures extends APIResource {
  static override readonly _key: readonly ['pricing', 'aiFeatures'] = Object.freeze([
    'pricing',
    'aiFeatures',
  ] as const);

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/pricing/ai-features', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class AIFeatures extends BaseAIFeatures {}
