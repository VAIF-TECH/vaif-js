// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Diff extends APIResource {
  retrieve(compareVersionID: string, params: DiffRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { versionId } = params
    return this._client.get(path`/ai/copilot/version/${versionId}/diff/${compareVersionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface DiffRetrieveParams {
  versionId: string;
}

export declare namespace Diff {
  export {
    type DiffRetrieveParams as DiffRetrieveParams
  };
}
