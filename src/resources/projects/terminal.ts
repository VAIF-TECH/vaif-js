// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTerminal extends APIResource {
  static override readonly _key: readonly ['projects', 'terminal'] = Object.freeze(['projects', 'terminal'] as const)

  exec(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/terminal/exec`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getSessions(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/terminal/sessions`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Terminal extends BaseTerminal {

}
