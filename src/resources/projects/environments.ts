// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Environments extends APIResource {
  create(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/environments`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(envID: string, params: EnvironmentUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.patch(path`/projects/${projectId}/environments/${envID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/environments`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(envID: string, params: EnvironmentDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/environments/${envID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  backfillURLs(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/environments/backfill-urls`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  bootstrap(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/environments/bootstrap`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  provisionSsl(
    envID: string,
    params: EnvironmentProvisionSslParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/environments/${envID}/provision-ssl`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveDomainStatus(
    envID: string,
    params: EnvironmentRetrieveDomainStatusParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/environments/${envID}/domain-status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveDomainVerification(
    envID: string,
    params: EnvironmentRetrieveDomainVerificationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/environments/${envID}/domain-verification`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  verifyCname(
    envID: string,
    params: EnvironmentVerifyCnameParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/environments/${envID}/verify-cname`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  verifyDomain(
    envID: string,
    params: EnvironmentVerifyDomainParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/environments/${envID}/verify-domain`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EnvironmentUpdateParams {
  projectId: string;
}

export interface EnvironmentDeleteParams {
  projectId: string;
}

export interface EnvironmentProvisionSslParams {
  projectId: string;
}

export interface EnvironmentRetrieveDomainStatusParams {
  projectId: string;
}

export interface EnvironmentRetrieveDomainVerificationParams {
  projectId: string;
}

export interface EnvironmentVerifyCnameParams {
  projectId: string;
}

export interface EnvironmentVerifyDomainParams {
  projectId: string;
}

export declare namespace Environments {
  export {
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentProvisionSslParams as EnvironmentProvisionSslParams,
    type EnvironmentRetrieveDomainStatusParams as EnvironmentRetrieveDomainStatusParams,
    type EnvironmentRetrieveDomainVerificationParams as EnvironmentRetrieveDomainVerificationParams,
    type EnvironmentVerifyCnameParams as EnvironmentVerifyCnameParams,
    type EnvironmentVerifyDomainParams as EnvironmentVerifyDomainParams,
  };
}
