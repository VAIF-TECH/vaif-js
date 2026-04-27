// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDomainVerification extends APIResource {
  static override readonly _key: readonly ['projects', 'environments', 'domainVerification'] = Object.freeze(['projects', 'environments', 'domainVerification'] as const)

  getDomainVerification(envID: string, params: DomainVerificationGetDomainVerificationParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/projects/${projectId}/environments/${envID}/domain-verification`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class DomainVerification extends BaseDomainVerification {

}

export interface DomainVerificationGetDomainVerificationParams {
  projectId: string;
}

export declare namespace DomainVerification {
  export {
    type DomainVerificationGetDomainVerificationParams as DomainVerificationGetDomainVerificationParams
  };
}
