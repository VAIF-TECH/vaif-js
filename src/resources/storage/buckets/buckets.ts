// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PoliciesAPI from './policies/policies';
import { Policies, PolicyDeleteParams, PolicyUpdateParams } from './policies/policies';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Buckets extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  create(body: BucketCreateParams, options?: RequestOptions): APIPromise<BucketCreateResponse> {
    return this._client.post('/storage/buckets', { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/storage/buckets', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface BucketCreateResponse {
  ok: true;

  bucket?: unknown;

[k: string]: unknown
}

export interface BucketCreateParams {
  name: string;

  projectId: string;

  allowedMimeTypes?: Array<string>;

  corsOrigins?: Array<string>;

  envId?: string;

  fileSizeLimit?: number;

  public?: boolean;
}

Buckets.Policies = Policies;

export declare namespace Buckets {
  export {
    type BucketCreateResponse as BucketCreateResponse,
    type BucketCreateParams as BucketCreateParams
  };

  export {
    Policies as Policies,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyDeleteParams as PolicyDeleteParams
  };
}
