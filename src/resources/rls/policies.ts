// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Policies extends APIResource {
  create(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/rls/policies/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/rls/policies/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(policyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/rls/policies/${policyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(policyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/rls/policies/${policyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  toggle(policyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/rls/policies/${policyID}/toggle`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
