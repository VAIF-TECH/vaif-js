// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StreamAPI from './stream';
import { BaseStream, Stream } from './stream';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseChat extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'chat'] = Object.freeze(['ai', 'copilot', 'chat'] as const)

  create(body: ChatCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ai/copilot/chat', { body, ...options });
  }
}
export class Chat extends BaseChat {
  stream: StreamAPI.Stream = new StreamAPI.Stream(this._client);
}

export type ChatCreateResponse = unknown

export interface ChatCreateParams {
  message: string;

  projectId: string;

  attachments?: Array<ChatCreateParams.Attachment>;

  generationOptions?: ChatCreateParams.GenerationOptions;

  generationTypes?: Array<'schema' | 'storage' | 'functions' | 'backend' | 'fullstack'>;

  modelId?: string;

  pinnedContext?: ChatCreateParams.PinnedContext;

  sessionId?: string;

  stream?: boolean;
}

export namespace ChatCreateParams {
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

  export interface PinnedContext {
    bucketIds?: Array<string>;

    functionIds?: Array<string>;

    tableIds?: Array<string>;
  }
}

Chat.Stream = Stream;
Chat.BaseStream = BaseStream;

export declare namespace Chat {
  export {
    type ChatCreateResponse as ChatCreateResponse,
    type ChatCreateParams as ChatCreateParams
  };

  export {
    Stream as Stream,
    BaseStream as BaseStream
  };
}
