// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatCreateParams, ChatCreateResponse } from './chat';
import * as DeployAPI from './deploy';
import { Deploy, DeployCreateParams, DeployRetrieveParams, DeployRetrieveResponse } from './deploy';
import * as EditorAPI from './editor';
import { Editor, EditorChatParams } from './editor';
import * as ExecutionAPI from './execution';
import {
  Execution,
  ExecutionResumeParams,
  ExecutionResumeResponse,
  ExecutionRollbackParams,
  ExecutionRollbackResponse,
} from './execution';
import * as GenerationAPI from './generation';
import { Generation } from './generation';
import * as GitAPI from './git';
import { Git } from './git';
import * as JobAPI from './job';
import { Job, JobCreateParams, JobCreateResponse } from './job';
import * as ManifestAPI from './manifest';
import { Manifest } from './manifest';
import * as MemoriesAPI from './memories';
import { Memories } from './memories';
import * as MetricsAPI from './metrics';
import { Metrics } from './metrics';
import * as SessionAPI from './session';
import { Session, SessionUpdateParams, SessionUpdateResponse } from './session';
import * as VersionAPI from './version';
import { Version, VersionRetrieveParams } from './version';
import * as ExportAPI from './export/export';
import { Export } from './export/export';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Copilot extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  generation: GenerationAPI.Generation = new GenerationAPI.Generation(this._client);
  manifest: ManifestAPI.Manifest = new ManifestAPI.Manifest(this._client);
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
  execution: ExecutionAPI.Execution = new ExecutionAPI.Execution(this._client);
  version: VersionAPI.Version = new VersionAPI.Version(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);
  job: JobAPI.Job = new JobAPI.Job(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  editor: EditorAPI.Editor = new EditorAPI.Editor(this._client);
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);
  deploy: DeployAPI.Deploy = new DeployAPI.Deploy(this._client);
  git: GitAPI.Git = new GitAPI.Git(this._client);

  retrieve(orgID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/ai/copilot/usage-org/${orgID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(
    messageID: string,
    body: CopilotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CopilotUpdateResponse> {
    return this._client.post(path`/ai/copilot/rate/${messageID}`, { body, ...options });
  }

  execute(body: CopilotExecuteParams, options?: RequestOptions): APIPromise<CopilotExecuteResponse> {
    return this._client.post('/ai/copilot/execute', { body, ...options });
  }

  feedback(body: CopilotFeedbackParams, options?: RequestOptions): APIPromise<CopilotFeedbackResponse> {
    return this._client.post('/ai/copilot/feedback', { body, ...options });
  }
}

export interface CopilotUpdateResponse {
  ok: true;
}

export interface CopilotExecuteResponse {
  ok: boolean;

  artifacts?: unknown;

  dryRun?: boolean;

  error?: unknown;

  plan?: unknown;

  results?: Array<unknown>;

  [k: string]: unknown;
}

export interface CopilotFeedbackResponse {
  ok: true;
}

export interface CopilotUpdateParams {
  rating: number;

  approved?: boolean;

  feedback?: string;
}

export interface CopilotExecuteParams {
  planId: string;

  sessionId: string;

  dryRun?: boolean;

  stepIds?: Array<string>;
}

export interface CopilotFeedbackParams {
  feedbackType: 'correct' | 'incorrect' | 'partial';

  messageId: string;

  sessionId: string;

  correctedIntent?: string;

  userFeedback?: string;
}

Copilot.Chat = Chat;
Copilot.Generation = Generation;
Copilot.Manifest = Manifest;
Copilot.Session = Session;
Copilot.Execution = Execution;
Copilot.Version = Version;
Copilot.Export = Export;
Copilot.Job = Job;
Copilot.Metrics = Metrics;
Copilot.Editor = Editor;
Copilot.Memories = Memories;
Copilot.Deploy = Deploy;
Copilot.Git = Git;

export declare namespace Copilot {
  export {
    type CopilotUpdateResponse as CopilotUpdateResponse,
    type CopilotExecuteResponse as CopilotExecuteResponse,
    type CopilotFeedbackResponse as CopilotFeedbackResponse,
    type CopilotUpdateParams as CopilotUpdateParams,
    type CopilotExecuteParams as CopilotExecuteParams,
    type CopilotFeedbackParams as CopilotFeedbackParams,
  };

  export {
    Chat as Chat,
    type ChatCreateResponse as ChatCreateResponse,
    type ChatCreateParams as ChatCreateParams,
  };

  export { Generation as Generation };

  export { Manifest as Manifest };

  export {
    Session as Session,
    type SessionUpdateResponse as SessionUpdateResponse,
    type SessionUpdateParams as SessionUpdateParams,
  };

  export {
    Execution as Execution,
    type ExecutionResumeResponse as ExecutionResumeResponse,
    type ExecutionRollbackResponse as ExecutionRollbackResponse,
    type ExecutionResumeParams as ExecutionResumeParams,
    type ExecutionRollbackParams as ExecutionRollbackParams,
  };

  export { Version as Version, type VersionRetrieveParams as VersionRetrieveParams };

  export { Export as Export };

  export { Job as Job, type JobCreateResponse as JobCreateResponse, type JobCreateParams as JobCreateParams };

  export { Metrics as Metrics };

  export { Editor as Editor, type EditorChatParams as EditorChatParams };

  export { Memories as Memories };

  export {
    Deploy as Deploy,
    type DeployRetrieveResponse as DeployRetrieveResponse,
    type DeployCreateParams as DeployCreateParams,
    type DeployRetrieveParams as DeployRetrieveParams,
  };

  export { Git as Git };
}
