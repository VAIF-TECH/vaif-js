// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Incidents extends APIResource {
  /**
   * Acknowledge an incident
   */
  acknowledge(incidentID: string, options?: RequestOptions): APIPromise<IncidentAcknowledgeResponse> {
    return this._client.post(path`/incidents/${incidentID}/ack`, options);
  }

  /**
   * Bulk acknowledge or resolve incidents
   */
  bulkAcknowledgeOrResolve(
    body: IncidentBulkAcknowledgeOrResolveParams,
    options?: RequestOptions,
  ): APIPromise<IncidentBulkAcknowledgeOrResolveResponse> {
    return this._client.post('/incidents/bulk', { body, ...options });
  }

  /**
   * List incidents for a project
   */
  listForProject(projectID: string, options?: RequestOptions): APIPromise<IncidentListForProjectResponse> {
    return this._client.get(path`/incidents/project/${projectID}`, options);
  }

  /**
   * Resolve an incident
   */
  resolve(incidentID: string, options?: RequestOptions): APIPromise<IncidentResolveResponse> {
    return this._client.post(path`/incidents/${incidentID}/resolve`, options);
  }
}

export interface IncidentAcknowledgeResponse {
  ok: true;
}

export interface IncidentBulkAcknowledgeOrResolveResponse {
  ok: true;

  updated: number;
}

export interface IncidentListForProjectResponse {
  incidents: Array<IncidentListForProjectResponse.Incident>;
}

export namespace IncidentListForProjectResponse {
  export interface Incident {
    id: string;

    createdAt: string | (string & {});

    orgId: string | null;

    projectId: string | null;

    status: string;

    message?: string | null;

    type?: string | null;

    updatedAt?: string | (string & {}) | null;

    [k: string]: unknown;
  }
}

export interface IncidentResolveResponse {
  ok: true;
}

export interface IncidentBulkAcknowledgeOrResolveParams {
  action: 'acknowledge' | 'resolve';

  ids: Array<string>;
}

export declare namespace Incidents {
  export {
    type IncidentAcknowledgeResponse as IncidentAcknowledgeResponse,
    type IncidentBulkAcknowledgeOrResolveResponse as IncidentBulkAcknowledgeOrResolveResponse,
    type IncidentListForProjectResponse as IncidentListForProjectResponse,
    type IncidentResolveResponse as IncidentResolveResponse,
    type IncidentBulkAcknowledgeOrResolveParams as IncidentBulkAcknowledgeOrResolveParams,
  };
}
