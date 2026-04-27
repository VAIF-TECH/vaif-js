// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseUsageAlerts extends APIResource {
  static override readonly _key: readonly ['billing', 'org', 'usageAlerts'] = Object.freeze(['billing', 'org', 'usageAlerts'] as const)

  update(alertID: string, params: UsageAlertUpdateParams, options?: RequestOptions): APIPromise<UsageAlertUpdateResponse> {
    const { orgId, ...body } = params
    return this._client.patch(path`/billing/org/${orgId}/usage-alerts/${alertID}`, { body, ...options });
  }

  delete(alertID: string, params: UsageAlertDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { orgId } = params
    return this._client.delete(path`/billing/org/${orgId}/usage-alerts/${alertID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getConfigured(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage-alerts/configured`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getHistory(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage-alerts/history`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getUsageAlerts(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/billing/org/${orgID}/usage-alerts`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  usageAlerts(orgID: string, body: UsageAlertUsageAlertsParams, options?: RequestOptions): APIPromise<UsageAlertUsageAlertsResponse> {
    return this._client.post(path`/billing/org/${orgID}/usage-alerts`, { body, ...options });
  }
}
export class UsageAlerts extends BaseUsageAlerts {

}

export interface UsageAlertUpdateResponse {
  ok: true;
}

export interface UsageAlertUsageAlertsResponse {
  alertId: string;

  ok: true;
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

export interface UsageAlertUsageAlertsParams {
  metric: 'ai_credits' | 'api_requests' | 'storage' | 'realtime_connections' | 'function_invocations' | 'bandwidth';

  threshold: number;

  notifyEmail?: boolean;
}

export declare namespace UsageAlerts {
  export {
    type UsageAlertUpdateResponse as UsageAlertUpdateResponse,
    type UsageAlertUsageAlertsResponse as UsageAlertUsageAlertsResponse,
    type UsageAlertUpdateParams as UsageAlertUpdateParams,
    type UsageAlertDeleteParams as UsageAlertDeleteParams,
    type UsageAlertUsageAlertsParams as UsageAlertUsageAlertsParams
  };
}
