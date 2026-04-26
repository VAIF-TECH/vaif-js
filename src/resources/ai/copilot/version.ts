// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Version extends APIResource {
  retrieve(
    compareVersionID: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { versionId } = params;
    return this._client.get(path`/ai/copilot/version/${versionId}/diff/${compareVersionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VersionRetrieveParams {
  versionId: string;
}

export declare namespace Version {
  export { type VersionRetrieveParams as VersionRetrieveParams };
}
