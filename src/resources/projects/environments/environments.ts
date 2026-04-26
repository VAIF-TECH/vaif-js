// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DomainStatusAPI from './domain-status';
import { BaseDomainStatus, DomainStatus, DomainStatusGetDomainStatusParams } from './domain-status';
import * as DomainVerificationAPI from './domain-verification';
import { BaseDomainVerification, DomainVerification, DomainVerificationGetDomainVerificationParams } from './domain-verification';
import * as ProvisionSslAPI from './provision-ssl';
import { BaseProvisionSsl, ProvisionSsl, ProvisionSslProvisionSslParams } from './provision-ssl';
import * as VerifyCnameAPI from './verify-cname';
import { BaseVerifyCname, VerifyCname, VerifyCnameVerifyCnameParams } from './verify-cname';
import * as VerifyDomainAPI from './verify-domain';
import { BaseVerifyDomain, VerifyDomain, VerifyDomainVerifyDomainParams } from './verify-domain';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseEnvironments extends APIResource {
  static override readonly _key: readonly ['projects', 'environments'] = Object.freeze(['projects', 'environments'] as const)

  update(envID: string, params: EnvironmentUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.patch(path`/projects/${projectId}/environments/${envID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(envID: string, params: EnvironmentDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.delete(path`/projects/${projectId}/environments/${envID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  backfillURLs(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/environments/backfill-urls`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  bootstrap(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/environments/bootstrap`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  environments(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/environments`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getEnvironments(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/environments`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Environments extends BaseEnvironments {
  domainStatus: DomainStatusAPI.DomainStatus = new DomainStatusAPI.DomainStatus(this._client);
  domainVerification: DomainVerificationAPI.DomainVerification = new DomainVerificationAPI.DomainVerification(this._client);
  provisionSsl: ProvisionSslAPI.ProvisionSsl = new ProvisionSslAPI.ProvisionSsl(this._client);
  verifyCname: VerifyCnameAPI.VerifyCname = new VerifyCnameAPI.VerifyCname(this._client);
  verifyDomain: VerifyDomainAPI.VerifyDomain = new VerifyDomainAPI.VerifyDomain(this._client);
}

export interface EnvironmentUpdateParams {
  projectId: string;
}

export interface EnvironmentDeleteParams {
  projectId: string;
}

Environments.DomainStatus = DomainStatus;
Environments.BaseDomainStatus = BaseDomainStatus;
Environments.DomainVerification = DomainVerification;
Environments.BaseDomainVerification = BaseDomainVerification;
Environments.ProvisionSsl = ProvisionSsl;
Environments.BaseProvisionSsl = BaseProvisionSsl;
Environments.VerifyCname = VerifyCname;
Environments.BaseVerifyCname = BaseVerifyCname;
Environments.VerifyDomain = VerifyDomain;
Environments.BaseVerifyDomain = BaseVerifyDomain;

export declare namespace Environments {
  export {
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams
  };

  export {
    DomainStatus as DomainStatus,
    BaseDomainStatus as BaseDomainStatus,
    type DomainStatusGetDomainStatusParams as DomainStatusGetDomainStatusParams
  };

  export {
    DomainVerification as DomainVerification,
    BaseDomainVerification as BaseDomainVerification,
    type DomainVerificationGetDomainVerificationParams as DomainVerificationGetDomainVerificationParams
  };

  export {
    ProvisionSsl as ProvisionSsl,
    BaseProvisionSsl as BaseProvisionSsl,
    type ProvisionSslProvisionSslParams as ProvisionSslProvisionSslParams
  };

  export {
    VerifyCname as VerifyCname,
    BaseVerifyCname as BaseVerifyCname,
    type VerifyCnameVerifyCnameParams as VerifyCnameVerifyCnameParams
  };

  export {
    VerifyDomain as VerifyDomain,
    BaseVerifyDomain as BaseVerifyDomain,
    type VerifyDomainVerifyDomainParams as VerifyDomainVerifyDomainParams
  };
}
