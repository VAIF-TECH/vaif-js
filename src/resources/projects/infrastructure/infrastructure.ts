// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MigrationAPI from './migration';
import { Migration } from './migration';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Infrastructure extends APIResource {
  migration: MigrationAPI.Migration = new MigrationAPI.Migration(this._client);

  list(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/infrastructure`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(instanceID: string, params: InfrastructureDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/infrastructure/${instanceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  migrateNow(
    instanceID: string,
    params: InfrastructureMigrateNowParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/migrate-now`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  provision(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/infrastructure/provision`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  provisionCustom(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/infrastructure/provision-custom`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  replica(
    instanceID: string,
    params: InfrastructureReplicaParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/replica`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  resize(instanceID: string, params: InfrastructureResizeParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/resize`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  resizeCustom(
    instanceID: string,
    params: InfrastructureResizeCustomParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/resize-custom`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveMetrics(
    instanceID: string,
    params: InfrastructureRetrieveMetricsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/infrastructure/${instanceID}/metrics`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveMigrationStatus(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/infrastructure/migration-status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveReplicas(
    instanceID: string,
    params: InfrastructureRetrieveReplicasParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/infrastructure/${instanceID}/replicas`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveUpgradeOptions(
    instanceID: string,
    params: InfrastructureRetrieveUpgradeOptionsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.get(path`/projects/${projectId}/infrastructure/${instanceID}/upgrade-options`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  start(instanceID: string, params: InfrastructureStartParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/start`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  stop(instanceID: string, params: InfrastructureStopParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/stop`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InfrastructureDeleteParams {
  projectId: string;
}

export interface InfrastructureMigrateNowParams {
  projectId: string;
}

export interface InfrastructureReplicaParams {
  projectId: string;
}

export interface InfrastructureResizeParams {
  projectId: string;
}

export interface InfrastructureResizeCustomParams {
  projectId: string;
}

export interface InfrastructureRetrieveMetricsParams {
  projectId: string;
}

export interface InfrastructureRetrieveReplicasParams {
  projectId: string;
}

export interface InfrastructureRetrieveUpgradeOptionsParams {
  projectId: string;
}

export interface InfrastructureStartParams {
  projectId: string;
}

export interface InfrastructureStopParams {
  projectId: string;
}

Infrastructure.Migration = Migration;

export declare namespace Infrastructure {
  export {
    type InfrastructureDeleteParams as InfrastructureDeleteParams,
    type InfrastructureMigrateNowParams as InfrastructureMigrateNowParams,
    type InfrastructureReplicaParams as InfrastructureReplicaParams,
    type InfrastructureResizeParams as InfrastructureResizeParams,
    type InfrastructureResizeCustomParams as InfrastructureResizeCustomParams,
    type InfrastructureRetrieveMetricsParams as InfrastructureRetrieveMetricsParams,
    type InfrastructureRetrieveReplicasParams as InfrastructureRetrieveReplicasParams,
    type InfrastructureRetrieveUpgradeOptionsParams as InfrastructureRetrieveUpgradeOptionsParams,
    type InfrastructureStartParams as InfrastructureStartParams,
    type InfrastructureStopParams as InfrastructureStopParams,
  };

  export { Migration as Migration };
}
