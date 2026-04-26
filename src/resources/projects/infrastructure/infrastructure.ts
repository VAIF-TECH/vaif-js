// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetricsAPI from './metrics';
import { MetricGetMetricsParams, Metrics } from './metrics';
import * as MigrateNowAPI from './migrate-now';
import { MigrateNow, MigrateNowMigrateNowParams } from './migrate-now';
import * as ReplicasAPI from './replicas';
import { ReplicaGetReplicasParams, ReplicaReplicaParams, Replicas } from './replicas';
import * as ResizeAPI from './resize';
import { Resize, ResizeResizeParams } from './resize';
import * as ResizeCustomAPI from './resize-custom';
import { ResizeCustom, ResizeCustomResizeCustomParams } from './resize-custom';
import * as StartAPI from './start';
import { Start, StartStartParams } from './start';
import * as StopAPI from './stop';
import { Stop, StopStopParams } from './stop';
import * as UpgradeOptionsAPI from './upgrade-options';
import { UpgradeOptionGetUpgradeOptionsParams, UpgradeOptions } from './upgrade-options';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Infrastructure extends APIResource {
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  migrateNow: MigrateNowAPI.MigrateNow = new MigrateNowAPI.MigrateNow(this._client);
  replicas: ReplicasAPI.Replicas = new ReplicasAPI.Replicas(this._client);
  resize: ResizeAPI.Resize = new ResizeAPI.Resize(this._client);
  resizeCustom: ResizeCustomAPI.ResizeCustom = new ResizeCustomAPI.ResizeCustom(this._client);
  start: StartAPI.Start = new StartAPI.Start(this._client);
  stop: StopAPI.Stop = new StopAPI.Stop(this._client);
  upgradeOptions: UpgradeOptionsAPI.UpgradeOptions = new UpgradeOptionsAPI.UpgradeOptions(this._client);

  delete(instanceID: string, params: InfrastructureDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.delete(path`/projects/${projectId}/infrastructure/${instanceID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getInfrastructure(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/infrastructure`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getMigrationStatus(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/infrastructure/migration-status`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  getProgress(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/infrastructure/migration/progress`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  provision(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/infrastructure/provision`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  provisionCustom(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/infrastructure/provision-custom`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retry(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/infrastructure/migration/retry`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  rollback(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/infrastructure/migration/rollback`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface InfrastructureDeleteParams {
  projectId: string;
}

Infrastructure.Metrics = Metrics;
Infrastructure.MigrateNow = MigrateNow;
Infrastructure.Replicas = Replicas;
Infrastructure.Resize = Resize;
Infrastructure.ResizeCustom = ResizeCustom;
Infrastructure.Start = Start;
Infrastructure.Stop = Stop;
Infrastructure.UpgradeOptions = UpgradeOptions;

export declare namespace Infrastructure {
  export {
    type InfrastructureDeleteParams as InfrastructureDeleteParams
  };

  export {
    Metrics as Metrics,
    type MetricGetMetricsParams as MetricGetMetricsParams
  };

  export {
    MigrateNow as MigrateNow,
    type MigrateNowMigrateNowParams as MigrateNowMigrateNowParams
  };

  export {
    Replicas as Replicas,
    type ReplicaGetReplicasParams as ReplicaGetReplicasParams,
    type ReplicaReplicaParams as ReplicaReplicaParams
  };

  export {
    Resize as Resize,
    type ResizeResizeParams as ResizeResizeParams
  };

  export {
    ResizeCustom as ResizeCustom,
    type ResizeCustomResizeCustomParams as ResizeCustomResizeCustomParams
  };

  export {
    Start as Start,
    type StartStartParams as StartStartParams
  };

  export {
    Stop as Stop,
    type StopStopParams as StopStopParams
  };

  export {
    UpgradeOptions as UpgradeOptions,
    type UpgradeOptionGetUpgradeOptionsParams as UpgradeOptionGetUpgradeOptionsParams
  };
}
