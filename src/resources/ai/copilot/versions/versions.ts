// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DiffAPI from './diff';
import { BaseDiff, Diff, DiffRetrieveParams } from './diff';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'versions'] = Object.freeze([
    'ai',
    'copilot',
    'versions',
  ] as const);

  retrieve(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/versions/${sessionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve2(versionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/version/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Versions extends BaseVersions {
  diff: DiffAPI.Diff = new DiffAPI.Diff(this._client);
}

Versions.Diff = Diff;
Versions.BaseDiff = BaseDiff;

export declare namespace Versions {
  export { Diff as Diff, BaseDiff as BaseDiff, type DiffRetrieveParams as DiffRetrieveParams };
}
