// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseOrg extends APIResource {
  static override readonly _key: readonly ['plans', 'org'] = Object.freeze(['plans', 'org'] as const)

  /**
   * List saved plans for an organization
   */
  retrieve(orgID: string, options?: RequestOptions): APIPromise<OrgRetrieveResponse> {
    return this._client.get(path`/plans/org/${orgID}`, options);
  }
}
export class Org extends BaseOrg {

}

export interface OrgRetrieveResponse {
  plans: Array<OrgRetrieveResponse.Plan>;
}

export namespace OrgRetrieveResponse {
  export interface Plan {
    id: string;

    createdAt: string | (string & {});

    name: string;

    ownerOrgId: string;

    taskType: string;

    visibility: string;

    description?: string | null;

    plan?: unknown;

    updatedAt?: string | (string & {}) | null;

  [k: string]: unknown
  }
}

export declare namespace Org {
  export {
    type OrgRetrieveResponse as OrgRetrieveResponse
  };
}
