// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseInvoices extends APIResource {
  static override readonly _key: readonly ['enterprise', 'org', 'invoices'] = Object.freeze([
    'enterprise',
    'org',
    'invoices',
  ] as const);

  getInvoices(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/enterprise/org/${orgID}/invoices`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Invoices extends BaseInvoices {}
