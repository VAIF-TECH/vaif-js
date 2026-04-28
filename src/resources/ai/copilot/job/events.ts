// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'job', 'events'] = Object.freeze([
    'ai',
    'copilot',
    'job',
    'events',
  ] as const);

  getEvents(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/job/${jobID}/events`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Events extends BaseEvents {}
