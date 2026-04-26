// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProvisionSsl extends APIResource {
  static override readonly _key: readonly ['projects', 'environments', 'provisionSsl'] = Object.freeze(['projects', 'environments', 'provisionSsl'] as const)

  provisionSsl(envID: string, params: ProvisionSslProvisionSslParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/environments/${envID}/provision-ssl`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class ProvisionSsl extends BaseProvisionSsl {

}

export interface ProvisionSslProvisionSslParams {
  projectId: string;
}

export declare namespace ProvisionSsl {
  export {
    type ProvisionSslProvisionSslParams as ProvisionSslProvisionSslParams
  };
}
