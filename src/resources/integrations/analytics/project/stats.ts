// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseStats extends APIResource {
  static override readonly _key: readonly ['integrations', 'analytics', 'project', 'stats'] = Object.freeze(['integrations', 'analytics', 'project', 'stats'] as const)

  getStats(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/integrations/analytics/project/${projectID}/stats`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Stats extends BaseStats {

}
