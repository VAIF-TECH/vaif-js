// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ToggleAPI from './toggle';
import { Toggle, ToggleToggleParams } from './toggle';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Policies extends APIResource {
  toggle: ToggleAPI.Toggle = new ToggleAPI.Toggle(this._client);

  update(policyID: string, params: PolicyUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { bucketId } = params
    return this._client.put(path`/storage/buckets/${bucketId}/policies/${policyID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(policyID: string, params: PolicyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { bucketId } = params
    return this._client.delete(path`/storage/buckets/${bucketId}/policies/${policyID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getPolicies(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/storage/buckets/${bucketID}/policies`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  policies(bucketID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/storage/buckets/${bucketID}/policies`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface PolicyUpdateParams {
  bucketId: string;
}

export interface PolicyDeleteParams {
  bucketId: string;
}

Policies.Toggle = Toggle;

export declare namespace Policies {
  export {
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyDeleteParams as PolicyDeleteParams
  };

  export {
    Toggle as Toggle,
    type ToggleToggleParams as ToggleToggleParams
  };
}
