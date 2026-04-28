// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OrgAPI from './org';
import { BaseOrg, Org } from './org';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseMetrics extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'metrics'] = Object.freeze([
    'ai',
    'copilot',
    'metrics',
  ] as const);

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/metrics/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Metrics extends BaseMetrics {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

Metrics.Org = Org;
Metrics.BaseOrg = BaseOrg;

export declare namespace Metrics {
  export { Org as Org, BaseOrg as BaseOrg };
}
