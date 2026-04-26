// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApplyAPI from './apply';
import { Apply, ApplyCreateParams, ApplyCreateResponse } from './apply';
import * as OrgAPI from './org';
import { Org, OrgRetrieveResponse } from './org';
import * as SaveAPI from './save';
import { Save, SaveCreateParams, SaveCreateResponse } from './save';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Plans extends APIResource {
  apply: ApplyAPI.Apply = new ApplyAPI.Apply(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
  save: SaveAPI.Save = new SaveAPI.Save(this._client);

  /**
   * Get a saved plan by ID
   */
  retrieve(planID: string, options?: RequestOptions): APIPromise<PlanRetrieveResponse> {
    return this._client.get(path`/plans/${planID}`, options);
  }
}

export interface PlanRetrieveResponse {
  plan: PlanRetrieveResponse.Plan;
}

export namespace PlanRetrieveResponse {
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

Plans.Apply = Apply;
Plans.Org = Org;
Plans.Save = Save;

export declare namespace Plans {
  export {
    type PlanRetrieveResponse as PlanRetrieveResponse
  };

  export {
    Apply as Apply,
    type ApplyCreateResponse as ApplyCreateResponse,
    type ApplyCreateParams as ApplyCreateParams
  };

  export {
    Org as Org,
    type OrgRetrieveResponse as OrgRetrieveResponse
  };

  export {
    Save as Save,
    type SaveCreateResponse as SaveCreateResponse,
    type SaveCreateParams as SaveCreateParams
  };
}
