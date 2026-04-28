// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';

export class BaseGcp extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'export', 'terraform', 'gcp'] = Object.freeze([
    'ai',
    'copilot',
    'export',
    'terraform',
    'gcp',
  ] as const);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/export/terraform/gcp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Gcp extends BaseGcp {}
