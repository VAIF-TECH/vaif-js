// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContextSummaryAPI from './context-summary';
import { BaseContextSummary, ContextSummary } from './context-summary';
import * as CreditStatusAPI from './credit-status';
import { BaseCreditStatus, CreditStatus } from './credit-status';
import * as ExecuteAPI from './execute';
import { BaseExecute, Execute, ExecuteCreateParams, ExecuteCreateResponse } from './execute';
import * as FeedbackAPI from './feedback';
import { BaseFeedback, Feedback, FeedbackCreateParams, FeedbackCreateResponse } from './feedback';
import * as ModelsAPI from './models';
import { BaseModels, Models } from './models';
import * as RateAPI from './rate';
import { BaseRate, Rate, RateCreateParams, RateCreateResponse } from './rate';
import * as SessionsAPI from './sessions';
import { BaseSessions, SessionUpdateParams, SessionUpdateResponse, Sessions } from './sessions';
import * as TrainingConsentAPI from './training-consent';
import {
  BaseTrainingConsent,
  TrainingConsent,
  TrainingConsentCreateParams,
  TrainingConsentCreateResponse,
} from './training-consent';
import * as UsageAPI from './usage';
import { BaseUsage, Usage } from './usage';
import * as UsageOrgAPI from './usage-org';
import { BaseUsageOrg, UsageOrg } from './usage-org';
import * as ChatAPI from './chat/chat';
import { BaseChat, Chat, ChatCreateParams, ChatCreateResponse } from './chat/chat';
import * as DeployAPI from './deploy/deploy';
import { BaseDeploy, Deploy, DeployCreateParams, DeployRetrieveResponse } from './deploy/deploy';
import * as EditorAPI from './editor/editor';
import { BaseEditor, Editor } from './editor/editor';
import * as ExecutionsAPI from './executions/executions';
import { BaseExecutions, Executions } from './executions/executions';
import * as ExportAPI from './export/export';
import { BaseExport, Export } from './export/export';
import * as GenerationAPI from './generation/generation';
import { BaseGeneration, Generation } from './generation/generation';
import * as GitAPI from './git/git';
import { BaseGit, Git } from './git/git';
import * as JobAPI from './job/job';
import { BaseJob, Job, JobCreateParams, JobCreateResponse } from './job/job';
import * as ManifestAPI from './manifest/manifest';
import { BaseManifest, Manifest } from './manifest/manifest';
import * as MemoriesAPI from './memories/memories';
import { BaseMemories, Memories } from './memories/memories';
import * as MetricsAPI from './metrics/metrics';
import { BaseMetrics, Metrics } from './metrics/metrics';
import * as VersionsAPI from './versions/versions';
import { BaseVersions, Versions } from './versions/versions';

export class BaseCopilot extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot'] = Object.freeze(['ai', 'copilot'] as const);
}
export class Copilot extends BaseCopilot {
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
Copilot.BaseChat = BaseChat;
Copilot.ContextSummary = ContextSummary;
Copilot.BaseContextSummary = BaseContextSummary;
Copilot.CreditStatus = CreditStatus;
Copilot.BaseCreditStatus = BaseCreditStatus;
Copilot.Deploy = Deploy;
Copilot.BaseDeploy = BaseDeploy;
Copilot.Editor = Editor;
Copilot.BaseEditor = BaseEditor;
Copilot.Execute = Execute;
Copilot.BaseExecute = BaseExecute;
Copilot.Executions = Executions;
Copilot.BaseExecutions = BaseExecutions;
Copilot.Export = Export;
Copilot.BaseExport = BaseExport;
Copilot.Feedback = Feedback;
Copilot.BaseFeedback = BaseFeedback;
Copilot.Generation = Generation;
Copilot.BaseGeneration = BaseGeneration;
Copilot.Git = Git;
Copilot.BaseGit = BaseGit;
Copilot.Job = Job;
Copilot.BaseJob = BaseJob;
Copilot.Manifest = Manifest;
Copilot.BaseManifest = BaseManifest;
Copilot.Memories = Memories;
Copilot.BaseMemories = BaseMemories;
Copilot.Metrics = Metrics;
Copilot.BaseMetrics = BaseMetrics;
Copilot.Models = Models;
Copilot.BaseModels = BaseModels;
Copilot.Rate = Rate;
Copilot.BaseRate = BaseRate;
Copilot.Sessions = Sessions;
Copilot.BaseSessions = BaseSessions;
Copilot.TrainingConsent = TrainingConsent;
Copilot.BaseTrainingConsent = BaseTrainingConsent;
Copilot.Usage = Usage;
Copilot.BaseUsage = BaseUsage;
Copilot.UsageOrg = UsageOrg;
Copilot.BaseUsageOrg = BaseUsageOrg;
Copilot.Versions = Versions;
Copilot.BaseVersions = BaseVersions;

export declare namespace Copilot {
  export {
    Chat as Chat,
    BaseChat as BaseChat,
    type ChatCreateResponse as ChatCreateResponse,
    type ChatCreateParams as ChatCreateParams,
  };

  export { ContextSummary as ContextSummary, BaseContextSummary as BaseContextSummary };

  export { CreditStatus as CreditStatus, BaseCreditStatus as BaseCreditStatus };

  export {
    Deploy as Deploy,
    BaseDeploy as BaseDeploy,
    type DeployRetrieveResponse as DeployRetrieveResponse,
    type DeployCreateParams as DeployCreateParams,
  };

  export { Editor as Editor, BaseEditor as BaseEditor };

  export {
    Execute as Execute,
    BaseExecute as BaseExecute,
    type ExecuteCreateResponse as ExecuteCreateResponse,
    type ExecuteCreateParams as ExecuteCreateParams,
  };

  export { Executions as Executions, BaseExecutions as BaseExecutions };

  export { Export as Export, BaseExport as BaseExport };

  export {
    Feedback as Feedback,
    BaseFeedback as BaseFeedback,
    type FeedbackCreateResponse as FeedbackCreateResponse,
    type FeedbackCreateParams as FeedbackCreateParams,
  };

  export { Generation as Generation, BaseGeneration as BaseGeneration };

  export { Git as Git, BaseGit as BaseGit };

  export {
    Job as Job,
    BaseJob as BaseJob,
    type JobCreateResponse as JobCreateResponse,
    type JobCreateParams as JobCreateParams,
  };

  export { Manifest as Manifest, BaseManifest as BaseManifest };

  export { Memories as Memories, BaseMemories as BaseMemories };

  export { Metrics as Metrics, BaseMetrics as BaseMetrics };

  export { Models as Models, BaseModels as BaseModels };

  export {
    Rate as Rate,
    BaseRate as BaseRate,
    type RateCreateResponse as RateCreateResponse,
    type RateCreateParams as RateCreateParams,
  };

  export {
    Sessions as Sessions,
    BaseSessions as BaseSessions,
    type SessionUpdateResponse as SessionUpdateResponse,
    type SessionUpdateParams as SessionUpdateParams,
  };

  export {
    TrainingConsent as TrainingConsent,
    BaseTrainingConsent as BaseTrainingConsent,
    type TrainingConsentCreateResponse as TrainingConsentCreateResponse,
    type TrainingConsentCreateParams as TrainingConsentCreateParams,
  };

  export { Usage as Usage, BaseUsage as BaseUsage };

  export { UsageOrg as UsageOrg, BaseUsageOrg as BaseUsageOrg };

  export { Versions as Versions, BaseVersions as BaseVersions };
}
