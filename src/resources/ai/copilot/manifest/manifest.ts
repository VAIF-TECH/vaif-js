// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PauseAPI from './pause';
import { BasePause, Pause } from './pause';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseManifest extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'manifest'] = Object.freeze([
    'ai',
    'copilot',
    'manifest',
  ] as const);

  retrieve(manifestID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/manifest/${manifestID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Manifest extends BaseManifest {
  pause: PauseAPI.Pause = new PauseAPI.Pause(this._client);
}

Manifest.Pause = Pause;
Manifest.BasePause = BasePause;

export declare namespace Manifest {
  export { Pause as Pause, BasePause as BasePause };
}
