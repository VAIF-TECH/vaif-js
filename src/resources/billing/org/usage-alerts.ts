// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class UsageAlerts extends APIResource {
  create(
    orgID: string,
    body: UsageAlertCreateParams,
    options?: RequestOptions,
  ): APIPromise<UsageAlertCreateResponse> {
    return this._client.post(path`/billing/org/${orgID}/usage-alerts`, { body, ...options });
  }

  update(
    alertID: string,
    params: UsageAlertUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UsageAlertUpdateResponse> {
    const { orgId, ...body } = params;
    return this._client.patch(path`/billing/org/${orgId}/usage-alerts/${alertID}`, { body, ...options });
  }

  list(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage-alerts`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(alertID: string, params: UsageAlertDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params;
    return this._client.delete(path`/billing/org/${orgId}/usage-alerts/${alertID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listConfigured(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage-alerts/configured`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveHistory(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage-alerts/history`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UsageAlertCreateResponse {
  alertId: string;

  ok: true;
}

export interface UsageAlertUpdateResponse {
  ok: true;
}

export interface UsageAlertCreateParams {
  metric:
    | 'ai_credits'
    | 'api_requests'
    | 'storage'
    | 'realtime_connections'
    | 'function_invocations'
    | 'bandwidth';

  threshold: number;

  notifyEmail?: boolean;
}

export interface UsageAlertUpdateParams {
  /**
   * Path param
   */
  orgId: string;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  notifyEmail?: boolean;

  /**
   * Body param
   */
  threshold?: number;
}

export interface UsageAlertDeleteParams {
  orgId: string;
}

export declare namespace UsageAlerts {
  export {
    type UsageAlertCreateResponse as UsageAlertCreateResponse,
    type UsageAlertUpdateResponse as UsageAlertUpdateResponse,
    type UsageAlertCreateParams as UsageAlertCreateParams,
    type UsageAlertUpdateParams as UsageAlertUpdateParams,
    type UsageAlertDeleteParams as UsageAlertDeleteParams,
  };
}
