// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OverviewAPI from './overview';
import { BaseOverview, Overview } from './overview';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['metrics', 'project'] = Object.freeze([
    'metrics',
    'project',
  ] as const);

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/metrics/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Project extends BaseProject {
  overview: OverviewAPI.Overview = new OverviewAPI.Overview(this._client);
}

Project.Overview = Overview;
Project.BaseOverview = BaseOverview;

export declare namespace Project {
  export { Overview as Overview, BaseOverview as BaseOverview };
}
