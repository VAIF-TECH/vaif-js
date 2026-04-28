// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';
import * as PromoteAPI from './promote';
import { BasePromote, Promote } from './promote';
import * as RollbackAPI from './rollback';
import { BaseRollback, Rollback } from './rollback';
import * as StepsAPI from './steps';
import { BaseSteps, Steps } from './steps';
import * as TriggerAPI from './trigger';
import { BaseTrigger, Trigger } from './trigger';
import * as TokensAPI from './tokens/tokens';
import { BaseTokens, TokenCreateParams, TokenCreateResponse, Tokens } from './tokens/tokens';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseDeployments extends APIResource {
  static override readonly _key: readonly ['deployments'] = Object.freeze(['deployments'] as const);

  retrieve(deploymentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/deployments/${deploymentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Deployments extends BaseDeployments {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  promote: PromoteAPI.Promote = new PromoteAPI.Promote(this._client);
  rollback: RollbackAPI.Rollback = new RollbackAPI.Rollback(this._client);
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  trigger: TriggerAPI.Trigger = new TriggerAPI.Trigger(this._client);
}

Deployments.Project = Project;
Deployments.BaseProject = BaseProject;
Deployments.Promote = Promote;
Deployments.BasePromote = BasePromote;
Deployments.Rollback = Rollback;
Deployments.BaseRollback = BaseRollback;
Deployments.Steps = Steps;
Deployments.BaseSteps = BaseSteps;
Deployments.Tokens = Tokens;
Deployments.BaseTokens = BaseTokens;
Deployments.Trigger = Trigger;
Deployments.BaseTrigger = BaseTrigger;

export declare namespace Deployments {
  export { Project as Project, BaseProject as BaseProject };

  export { Promote as Promote, BasePromote as BasePromote };

  export { Rollback as Rollback, BaseRollback as BaseRollback };

  export { Steps as Steps, BaseSteps as BaseSteps };

  export {
    Tokens as Tokens,
    BaseTokens as BaseTokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams,
  };

  export { Trigger as Trigger, BaseTrigger as BaseTrigger };
}
