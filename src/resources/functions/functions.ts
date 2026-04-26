// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeployStatusAPI from './deploy-status';
import { DeployStatus } from './deploy-status';
import * as InvokeAPI from './invoke';
import { Invoke } from './invoke';
import * as LogsAPI from './logs';
import { Logs } from './logs';
import * as MetricsAPI from './metrics';
import { Metrics } from './metrics';
import * as ScheduleAPI from './schedule';
import { Schedule, ScheduleScheduleParams, ScheduleScheduleResponse } from './schedule';
import * as SourceAPI from './source';
import { Source, SourceSourceParams, SourceSourceResponse } from './source';
import * as TriggersAPI from './triggers';
import { TriggerTriggersParams, TriggerTriggersResponse, Triggers } from './triggers';
import * as InvocationsAPI from './invocations/invocations';
import { Invocations } from './invocations/invocations';
import * as ProjectAPI from './project/project';
import { Project } from './project/project';
import * as SecretsAPI from './secrets/secrets';
import { SecretCreateParams, SecretCreateResponse, SecretUpdateParams, SecretUpdateResponse, Secrets } from './secrets/secrets';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Functions extends APIResource {
  deployStatus: DeployStatusAPI.DeployStatus = new DeployStatusAPI.DeployStatus(this._client);
  invocations: InvocationsAPI.Invocations = new InvocationsAPI.Invocations(this._client);
  invoke: InvokeAPI.Invoke = new InvokeAPI.Invoke(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  schedule: ScheduleAPI.Schedule = new ScheduleAPI.Schedule(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  source: SourceAPI.Source = new SourceAPI.Source(this._client);
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);

  create(body: FunctionCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/functions/', { body, ...options });
  }

  retrieve(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  update(functionID: string, body: FunctionUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch(path`/functions/${functionID}`, { body, ...options });
  }

  delete(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/${functionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export type FunctionCreateResponse = unknown

export type FunctionUpdateResponse = unknown

export interface FunctionCreateParams {
  name: string;

  projectId: string;

  description?: string;

  entrypoint?: string;

  envId?: string;

  runtime?: string;

  schedule?: string;

  timeoutMs?: number;
}

export interface FunctionUpdateParams {
  description?: string | null;

  enabled?: boolean;

  entrypoint?: string;

  name?: string;

  schedule?: string | null;

  timeoutMs?: number;
}

Functions.DeployStatus = DeployStatus;
Functions.Invocations = Invocations;
Functions.Invoke = Invoke;
Functions.Logs = Logs;
Functions.Metrics = Metrics;
Functions.Project = Project;
Functions.Schedule = Schedule;
Functions.Secrets = Secrets;
Functions.Source = Source;
Functions.Triggers = Triggers;

export declare namespace Functions {
  export {
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionUpdateResponse as FunctionUpdateResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams
  };

  export {
    DeployStatus as DeployStatus
  };

  export {
    Invocations as Invocations
  };

  export {
    Invoke as Invoke
  };

  export {
    Logs as Logs
  };

  export {
    Metrics as Metrics
  };

  export {
    Project as Project
  };

  export {
    Schedule as Schedule,
    type ScheduleScheduleResponse as ScheduleScheduleResponse,
    type ScheduleScheduleParams as ScheduleScheduleParams
  };

  export {
    Secrets as Secrets,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams
  };

  export {
    Source as Source,
    type SourceSourceResponse as SourceSourceResponse,
    type SourceSourceParams as SourceSourceParams
  };

  export {
    Triggers as Triggers,
    type TriggerTriggersResponse as TriggerTriggersResponse,
    type TriggerTriggersParams as TriggerTriggersParams
  };
}
