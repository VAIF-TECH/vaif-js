// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvocationsAPI from './invocations';
import { Invocations } from './invocations';
import * as ProjectAPI from './project';
import { Project, ProjectRetrieveByNameParams } from './project';
import * as ScheduleAPI from './schedule';
import { Schedule, ScheduleUpdateParams, ScheduleUpdateResponse } from './schedule';
import * as SecretsAPI from './secrets';
import {
  SecretCreateParams,
  SecretCreateResponse,
  SecretUpdateParams,
  SecretUpdateResponse,
  Secrets,
} from './secrets';
import * as TriggersAPI from './triggers';
import { TriggerCreateParams, TriggerCreateResponse, Triggers } from './triggers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Functions extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  invocations: InvocationsAPI.Invocations = new InvocationsAPI.Invocations(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);
  schedule: ScheduleAPI.Schedule = new ScheduleAPI.Schedule(this._client);

  create(body: FunctionCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/functions/', { body, ...options });
  }

  retrieve(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(functionID: string, body: FunctionUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch(path`/functions/${functionID}`, { body, ...options });
  }

  delete(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/functions/${functionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getDeployStatus(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/deploy-status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getLogs(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/logs`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getMetrics(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/${functionID}/metrics`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  invoke(functionIDOrName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/functions/${functionIDOrName}/invoke`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateSource(
    functionID: string,
    body: FunctionUpdateSourceParams,
    options?: RequestOptions,
  ): APIPromise<FunctionUpdateSourceResponse> {
    return this._client.put(path`/functions/${functionID}/source`, { body, ...options });
  }
}

export type FunctionCreateResponse = unknown;

export type FunctionUpdateResponse = unknown;

export interface FunctionUpdateSourceResponse {
  ok: true;
}

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

export interface FunctionUpdateSourceParams {
  sourceCode: string;
}

Functions.Project = Project;
Functions.Invocations = Invocations;
Functions.Secrets = Secrets;
Functions.Triggers = Triggers;
Functions.Schedule = Schedule;

export declare namespace Functions {
  export {
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionUpdateResponse as FunctionUpdateResponse,
    type FunctionUpdateSourceResponse as FunctionUpdateSourceResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionUpdateSourceParams as FunctionUpdateSourceParams,
  };

  export { Project as Project, type ProjectRetrieveByNameParams as ProjectRetrieveByNameParams };

  export { Invocations as Invocations };

  export {
    Secrets as Secrets,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
  };

  export {
    Triggers as Triggers,
    type TriggerCreateResponse as TriggerCreateResponse,
    type TriggerCreateParams as TriggerCreateParams,
  };

  export {
    Schedule as Schedule,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleUpdateParams as ScheduleUpdateParams,
  };
}
