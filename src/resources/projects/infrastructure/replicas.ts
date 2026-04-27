// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseReplicas extends APIResource {
  static override readonly _key: readonly ['projects', 'infrastructure', 'replicas'] = Object.freeze(['projects', 'infrastructure', 'replicas'] as const)

  getReplicas(instanceID: string, params: ReplicaGetReplicasParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.get(path`/projects/${projectId}/infrastructure/${instanceID}/replicas`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  replica(instanceID: string, params: ReplicaReplicaParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/replica`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Replicas extends BaseReplicas {

}

export interface ReplicaGetReplicasParams {
  projectId: string;
}

export interface ReplicaReplicaParams {
  projectId: string;
}

export declare namespace Replicas {
  export {
    type ReplicaGetReplicasParams as ReplicaGetReplicasParams,
    type ReplicaReplicaParams as ReplicaReplicaParams
  };
}
