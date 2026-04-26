// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DomainStatusAPI from './domain-status';
import { DomainStatus, DomainStatusGetDomainStatusParams } from './domain-status';
import * as DomainVerificationAPI from './domain-verification';
import { DomainVerification, DomainVerificationGetDomainVerificationParams } from './domain-verification';
import * as ProvisionSslAPI from './provision-ssl';
import { ProvisionSsl, ProvisionSslProvisionSslParams } from './provision-ssl';
import * as VerifyCnameAPI from './verify-cname';
import { VerifyCname, VerifyCnameVerifyCnameParams } from './verify-cname';
import * as VerifyDomainAPI from './verify-domain';
import { VerifyDomain, VerifyDomainVerifyDomainParams } from './verify-domain';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Environments extends APIResource {
  domainStatus: DomainStatusAPI.DomainStatus = new DomainStatusAPI.DomainStatus(this._client);
  domainVerification: DomainVerificationAPI.DomainVerification = new DomainVerificationAPI.DomainVerification(this._client);
  provisionSsl: ProvisionSslAPI.ProvisionSsl = new ProvisionSslAPI.ProvisionSsl(this._client);
  verifyCname: VerifyCnameAPI.VerifyCname = new VerifyCnameAPI.VerifyCname(this._client);
  verifyDomain: VerifyDomainAPI.VerifyDomain = new VerifyDomainAPI.VerifyDomain(this._client);

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

export interface EnvironmentUpdateParams {
  projectId: string;
}

export interface EnvironmentDeleteParams {
  projectId: string;
}

Environments.DomainStatus = DomainStatus;
Environments.DomainVerification = DomainVerification;
Environments.ProvisionSsl = ProvisionSsl;
Environments.VerifyCname = VerifyCname;
Environments.VerifyDomain = VerifyDomain;

export declare namespace Environments {
  export {
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams
  };

  export {
    DomainStatus as DomainStatus,
    type DomainStatusGetDomainStatusParams as DomainStatusGetDomainStatusParams
  };

  export {
    DomainVerification as DomainVerification,
    type DomainVerificationGetDomainVerificationParams as DomainVerificationGetDomainVerificationParams
  };

  export {
    ProvisionSsl as ProvisionSsl,
    type ProvisionSslProvisionSslParams as ProvisionSslProvisionSslParams
  };

  export {
    VerifyCname as VerifyCname,
    type VerifyCnameVerifyCnameParams as VerifyCnameVerifyCnameParams
  };

  export {
    VerifyDomain as VerifyDomain,
    type VerifyDomainVerifyDomainParams as VerifyDomainVerifyDomainParams
  };
}
