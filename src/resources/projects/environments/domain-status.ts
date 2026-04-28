// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDomainStatus extends APIResource {
  static override readonly _key: readonly ['projects', 'environments', 'domainStatus'] = Object.freeze([
    'projects',
    'environments',
    'domainStatus',
  ] as const);

  getDomainStatus(
    envID: string,
    params: DomainStatusGetDomainStatusParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/environments/${envID}/domain-status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class DomainStatus extends BaseDomainStatus {}

export interface DomainStatusGetDomainStatusParams {
  projectId: string;
}

export declare namespace DomainStatus {
  export { type DomainStatusGetDomainStatusParams as DomainStatusGetDomainStatusParams };
}
