// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class BaseWebhook extends APIResource {
  static override readonly _key: readonly ['billing', 'webhook'] = Object.freeze([
    'billing',
    'webhook',
  ] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/billing/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Webhook extends BaseWebhook {}
