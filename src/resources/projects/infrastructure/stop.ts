// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseStop extends APIResource {
  static override readonly _key: readonly ['projects', 'infrastructure', 'stop'] = Object.freeze(['projects', 'infrastructure', 'stop'] as const)

  stop(instanceID: string, params: StopStopParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/stop`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Stop extends BaseStop {

}

export interface StopStopParams {
  projectId: string;
}

export declare namespace Stop {
  export {
    type StopStopParams as StopStopParams
  };
}
