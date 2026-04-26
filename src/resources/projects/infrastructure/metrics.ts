// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseMetrics extends APIResource {
  static override readonly _key: readonly ['projects', 'infrastructure', 'metrics'] = Object.freeze(['projects', 'infrastructure', 'metrics'] as const)

  getMetrics(instanceID: string, params: MetricGetMetricsParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/projects/${projectId}/infrastructure/${instanceID}/metrics`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Metrics extends BaseMetrics {

}

export interface MetricGetMetricsParams {
  projectId: string;
}

export declare namespace Metrics {
  export {
    type MetricGetMetricsParams as MetricGetMetricsParams
  };
}
