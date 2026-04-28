// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseDiff extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'versions', 'diff'] = Object.freeze([
    'ai',
    'copilot',
    'versions',
    'diff',
  ] as const);

  retrieve(compareVersionID: string, params: DiffRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { versionId } = params;
    return this._client.get(path`/ai/copilot/version/${versionId}/diff/${compareVersionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Diff extends BaseDiff {}

export interface DiffRetrieveParams {
  versionId: string;
}

export declare namespace Diff {
  export { type DiffRetrieveParams as DiffRetrieveParams };
}
