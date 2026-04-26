// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VerifyDomain extends APIResource {
  verifyDomain(envID: string, params: VerifyDomainVerifyDomainParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/environments/${envID}/verify-domain`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface VerifyDomainVerifyDomainParams {
  projectId: string;
}

export declare namespace VerifyDomain {
  export {
    type VerifyDomainVerifyDomainParams as VerifyDomainVerifyDomainParams
  };
}
