// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseCommand extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'command'] = Object.freeze([
    'mongoDB',
    'command',
  ] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/mongodb/command', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Command extends BaseCommand {}
