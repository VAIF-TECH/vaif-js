// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Save extends APIResource {
  /**
   * Save an AI-generated plan
   */
  create(body: SaveCreateParams, options?: RequestOptions): APIPromise<SaveCreateResponse> {
    return this._client.post('/plans/save', { body, ...options });
  }
}

export interface SaveCreateResponse {
  ok: true;

  plan: SaveCreateResponse.Plan;
}

export namespace SaveCreateResponse {
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

export interface SaveCreateParams {
  name: string;

  orgId: string;

  plan: SaveCreateParams.Plan;

  taskType: string;

  description?: string;

  visibility?: 'public' | 'org_private' | 'unlisted';
}

export namespace SaveCreateParams {
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

export declare namespace Save {
  export {
    type SaveCreateResponse as SaveCreateResponse,
    type SaveCreateParams as SaveCreateParams
  };
}
