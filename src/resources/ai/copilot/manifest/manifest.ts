// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PauseAPI from './pause';
import { Pause } from './pause';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Manifest extends APIResource {
  pause: PauseAPI.Pause = new PauseAPI.Pause(this._client);

  retrieve(manifestID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/manifest/${manifestID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Manifest.Pause = Pause;

export declare namespace Manifest {
  export {
    Pause as Pause
  };
}
