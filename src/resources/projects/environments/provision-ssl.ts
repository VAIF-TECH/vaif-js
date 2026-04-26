// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ProvisionSsl extends APIResource {
  provisionSsl(envID: string, params: ProvisionSslProvisionSslParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/environments/${envID}/provision-ssl`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface ProvisionSslProvisionSslParams {
  projectId: string;
}

export declare namespace ProvisionSsl {
  export {
    type ProvisionSslProvisionSslParams as ProvisionSslProvisionSslParams
  };
}
