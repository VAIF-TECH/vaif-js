// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DiffAPI from './diff';
import { Diff, DiffRetrieveParams } from './diff';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Versions extends APIResource {
  diff: DiffAPI.Diff = new DiffAPI.Diff(this._client);

  retrieve(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/versions/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve2(versionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/version/${versionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Versions.Diff = Diff;

export declare namespace Versions {
  export {
    Diff as Diff,
    type DiffRetrieveParams as DiffRetrieveParams
  };
}
