// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Terraform extends APIResource {
  aws(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/export/terraform/aws', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  gcp(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/export/terraform/gcp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
