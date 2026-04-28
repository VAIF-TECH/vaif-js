// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSteps extends APIResource {
  static override readonly _key: readonly ['deployments', 'steps'] = Object.freeze([
    'deployments',
    'steps',
  ] as const);

  getSteps(deploymentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/deployments/${deploymentID}/steps`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Steps extends BaseSteps {}
