// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePause extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'manifest', 'pause'] = Object.freeze([
    'ai',
    'copilot',
    'manifest',
    'pause',
  ] as const);

  pause(manifestID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/manifest/${manifestID}/pause`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Pause extends BasePause {}
