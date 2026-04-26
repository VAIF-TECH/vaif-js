// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Job extends APIResource {
  create(body: JobCreateParams, options?: RequestOptions): APIPromise<JobCreateResponse> {
    return this._client.post('/ai/copilot/job', { body, ...options });
  }

  retrieve(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/job/${jobID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  cancel(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/job/${jobID}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveEvents(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/job/${jobID}/events`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retry(jobID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/job/${jobID}/retry`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface JobCreateResponse {
  eventsUrl: string;

  jobId: string;

  model: string;

  ok: true;

  status: string;

  statusUrl: string;

  tier: string;
}

export interface JobCreateParams {
  message: string;

  projectId: string;

  attachments?: Array<JobCreateParams.Attachment>;

  generationOptions?: JobCreateParams.GenerationOptions;

  generationTypes?: Array<'schema' | 'storage' | 'functions' | 'backend' | 'fullstack'>;

  modelId?: string;

  resumeFromCheckpoint?: string;

  resumeFromExecution?: string;

  sessionId?: string;
}

export namespace JobCreateParams {
  export interface Attachment {
    content: string;

    type: 'schema' | 'function' | 'file' | 'context';

    name?: string;
  }

  export interface GenerationOptions {
    apiStyle?: 'rest' | 'graphql' | 'trpc';

    architecture?: 'mvc' | 'clean' | 'hexagonal' | 'feature-sliced';

    auditLogs?: boolean;

    authMethod?: 'vaif' | 'jwt' | 'session' | 'oauth' | 'sso';

    containerization?: 'docker' | 'none';

    database?: 'vaif' | 'postgresql' | 'mysql' | 'mongodb';

    dbMigrations?: boolean;

    deployTarget?: 'railway' | 'fly-io' | 'render' | 'cloud-run' | 'aws-ecs';

    emailVerification?: boolean;

    featureFlags?: boolean;

    framework?: string;

    gitHooks?: boolean;

    healthChecks?: boolean;

    includeApiCollection?: boolean;

    includeSampleData?: boolean;

    includeSdkClient?: boolean;

    language?: 'typescript' | 'python' | 'go';

    mfa?: boolean;

    mode?: 'opinionated' | 'minimal' | 'custom';

    multiTenant?: 'single' | 'org-based' | 'project-based';

    outputDepth?: 'minimal' | 'standard' | 'enterprise';

    rateLimiting?: boolean;

    rbac?: 'off' | 'basic' | 'advanced';

    realtime?: 'websockets' | 'sse' | 'pubsub' | 'none';

    scope?: 'schema-only' | 'functions-only' | 'full-backend';

    securityHeaders?: boolean;

    storage?: 'vaif' | 's3' | 'gcs' | 'local';

    tests?: Array<'unit' | 'integration' | 'e2e'>;
  }
}

export declare namespace Job {
  export { type JobCreateResponse as JobCreateResponse, type JobCreateParams as JobCreateParams };
}
