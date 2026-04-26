// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Plans extends APIResource {
  /**
   * Get a saved plan by ID
   */
  retrieve(planID: string, options?: RequestOptions): APIPromise<PlanRetrieveResponse> {
    return this._client.get(path`/plans/${planID}`, options);
  }

  /**
   * Apply a saved plan to a project
   */
  apply(body: PlanApplyParams, options?: RequestOptions): APIPromise<PlanApplyResponse> {
    return this._client.post('/plans/apply', { body, ...options });
  }

  /**
   * List saved plans for an organization
   */
  listForOrg(orgID: string, options?: RequestOptions): APIPromise<PlanListForOrgResponse> {
    return this._client.get(path`/plans/org/${orgID}`, options);
  }

  /**
   * Save an AI-generated plan
   */
  save(body: PlanSaveParams, options?: RequestOptions): APIPromise<PlanSaveResponse> {
    return this._client.post('/plans/save', { body, ...options });
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

    [k: string]: unknown;
  }
}

export interface PlanApplyResponse {
  ok: true;

  appliedSteps?: unknown;
}

export interface PlanListForOrgResponse {
  plans: Array<PlanListForOrgResponse.Plan>;
}

export namespace PlanListForOrgResponse {
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

    [k: string]: unknown;
  }
}

export interface PlanSaveResponse {
  ok: true;

  plan: PlanSaveResponse.Plan;
}

export namespace PlanSaveResponse {
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

    [k: string]: unknown;
  }
}

export interface PlanApplyParams {
  planId: string;

  projectId: string;

  allowApply?: boolean;

  envId?: string;
}

export interface PlanSaveParams {
  name: string;

  orgId: string;

  plan: PlanSaveParams.Plan;

  taskType: string;

  description?: string;

  visibility?: 'public' | 'org_private' | 'unlisted';
}

export namespace PlanSaveParams {
  export interface Plan {
    intent: string;

    steps: Array<Plan.Step>;

    version: string;

    warnings?: Array<string>;
  }

  export namespace Plan {
    export interface Step {
      action: string;

      args?: { [key: string]: unknown };
    }
  }
}

export declare namespace Plans {
  export {
    type PlanRetrieveResponse as PlanRetrieveResponse,
    type PlanApplyResponse as PlanApplyResponse,
    type PlanListForOrgResponse as PlanListForOrgResponse,
    type PlanSaveResponse as PlanSaveResponse,
    type PlanApplyParams as PlanApplyParams,
    type PlanSaveParams as PlanSaveParams,
  };
}
