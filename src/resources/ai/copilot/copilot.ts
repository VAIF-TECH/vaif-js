// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContextSummaryAPI from './context-summary';
import { ContextSummary } from './context-summary';
import * as CreditStatusAPI from './credit-status';
import { CreditStatus } from './credit-status';
import * as ExecuteAPI from './execute';
import { Execute, ExecuteCreateParams, ExecuteCreateResponse } from './execute';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateParams, FeedbackCreateResponse } from './feedback';
import * as ModelsAPI from './models';
import { Models } from './models';
import * as RateAPI from './rate';
import { Rate, RateCreateParams, RateCreateResponse } from './rate';
import * as SessionsAPI from './sessions';
import { SessionUpdateParams, SessionUpdateResponse, Sessions } from './sessions';
import * as TrainingConsentAPI from './training-consent';
import { TrainingConsent, TrainingConsentCreateParams, TrainingConsentCreateResponse } from './training-consent';
import * as UsageAPI from './usage';
import { Usage } from './usage';
import * as UsageOrgAPI from './usage-org';
import { UsageOrg } from './usage-org';
import * as ChatAPI from './chat/chat';
import { Chat, ChatCreateParams, ChatCreateResponse } from './chat/chat';
import * as DeployAPI from './deploy/deploy';
import { Deploy, DeployCreateParams, DeployRetrieveResponse } from './deploy/deploy';
import * as EditorAPI from './editor/editor';
import { Editor } from './editor/editor';
import * as ExecutionsAPI from './executions/executions';
import { Executions } from './executions/executions';
import * as ExportAPI from './export/export';
import { Export } from './export/export';
import * as GenerationAPI from './generation/generation';
import { Generation } from './generation/generation';
import * as GitAPI from './git/git';
import { Git } from './git/git';
import * as JobAPI from './job/job';
import { Job, JobCreateParams, JobCreateResponse } from './job/job';
import * as ManifestAPI from './manifest/manifest';
import { Manifest } from './manifest/manifest';
import * as MemoriesAPI from './memories/memories';
import { Memories } from './memories/memories';
import * as MetricsAPI from './metrics/metrics';
import { Metrics } from './metrics/metrics';
import * as VersionsAPI from './versions/versions';
import { Versions } from './versions/versions';

export class Copilot extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  contextSummary: ContextSummaryAPI.ContextSummary = new ContextSummaryAPI.ContextSummary(this._client);
  creditStatus: CreditStatusAPI.CreditStatus = new CreditStatusAPI.CreditStatus(this._client);
  deploy: DeployAPI.Deploy = new DeployAPI.Deploy(this._client);
  editor: EditorAPI.Editor = new EditorAPI.Editor(this._client);
  execute: ExecuteAPI.Execute = new ExecuteAPI.Execute(this._client);
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);
  generation: GenerationAPI.Generation = new GenerationAPI.Generation(this._client);
  git: GitAPI.Git = new GitAPI.Git(this._client);
  job: JobAPI.Job = new JobAPI.Job(this._client);
  manifest: ManifestAPI.Manifest = new ManifestAPI.Manifest(this._client);
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  rate: RateAPI.Rate = new RateAPI.Rate(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  trainingConsent: TrainingConsentAPI.TrainingConsent = new TrainingConsentAPI.TrainingConsent(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  usageOrg: UsageOrgAPI.UsageOrg = new UsageOrgAPI.UsageOrg(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Copilot.Chat = Chat;
Copilot.ContextSummary = ContextSummary;
Copilot.CreditStatus = CreditStatus;
Copilot.Deploy = Deploy;
Copilot.Editor = Editor;
Copilot.Execute = Execute;
Copilot.Executions = Executions;
Copilot.Export = Export;
Copilot.Feedback = Feedback;
Copilot.Generation = Generation;
Copilot.Git = Git;
Copilot.Job = Job;
Copilot.Manifest = Manifest;
Copilot.Memories = Memories;
Copilot.Metrics = Metrics;
Copilot.Models = Models;
Copilot.Rate = Rate;
Copilot.Sessions = Sessions;
Copilot.TrainingConsent = TrainingConsent;
Copilot.Usage = Usage;
Copilot.UsageOrg = UsageOrg;
Copilot.Versions = Versions;

export declare namespace Copilot {
  export {
    Chat as Chat,
    type ChatCreateResponse as ChatCreateResponse,
    type ChatCreateParams as ChatCreateParams
  };

  export {
    ContextSummary as ContextSummary
  };

  export {
    CreditStatus as CreditStatus
  };

  export {
    Deploy as Deploy,
    type DeployRetrieveResponse as DeployRetrieveResponse,
    type DeployCreateParams as DeployCreateParams
  };

  export {
    Editor as Editor
  };

  export {
    Execute as Execute,
    type ExecuteCreateResponse as ExecuteCreateResponse,
    type ExecuteCreateParams as ExecuteCreateParams
  };

  export {
    Executions as Executions
  };

  export {
    Export as Export
  };

  export {
    Feedback as Feedback,
    type FeedbackCreateResponse as FeedbackCreateResponse,
    type FeedbackCreateParams as FeedbackCreateParams
  };

  export {
    Generation as Generation
  };

  export {
    Git as Git
  };

  export {
    Job as Job,
    type JobCreateResponse as JobCreateResponse,
    type JobCreateParams as JobCreateParams
  };

  export {
    Manifest as Manifest
  };

  export {
    Memories as Memories
  };

  export {
    Metrics as Metrics
  };

  export {
    Models as Models
  };

  export {
    Rate as Rate,
    type RateCreateResponse as RateCreateResponse,
    type RateCreateParams as RateCreateParams
  };

  export {
    Sessions as Sessions,
    type SessionUpdateResponse as SessionUpdateResponse,
    type SessionUpdateParams as SessionUpdateParams
  };

  export {
    TrainingConsent as TrainingConsent,
    type TrainingConsentCreateResponse as TrainingConsentCreateResponse,
    type TrainingConsentCreateParams as TrainingConsentCreateParams
  };

  export {
    Usage as Usage
  };

  export {
    UsageOrg as UsageOrg
  };

  export {
    Versions as Versions
  };
}
