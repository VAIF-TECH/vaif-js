// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';
import * as PromoteAPI from './promote';
import { Promote } from './promote';
import * as RollbackAPI from './rollback';
import { Rollback } from './rollback';
import * as StepsAPI from './steps';
import { Steps } from './steps';
import * as TriggerAPI from './trigger';
import { Trigger } from './trigger';
import * as TokensAPI from './tokens/tokens';
import { TokenCreateParams, TokenCreateResponse, Tokens } from './tokens/tokens';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deployments extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  promote: PromoteAPI.Promote = new PromoteAPI.Promote(this._client);
  rollback: RollbackAPI.Rollback = new RollbackAPI.Rollback(this._client);
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  trigger: TriggerAPI.Trigger = new TriggerAPI.Trigger(this._client);

  retrieve(deploymentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/deployments/${deploymentID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Deployments.Project = Project;
Deployments.Promote = Promote;
Deployments.Rollback = Rollback;
Deployments.Steps = Steps;
Deployments.Tokens = Tokens;
Deployments.Trigger = Trigger;

export declare namespace Deployments {
  export {
    Project as Project
  };

  export {
    Promote as Promote
  };

  export {
    Rollback as Rollback
  };

  export {
    Steps as Steps
  };

  export {
    Tokens as Tokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenCreateParams as TokenCreateParams
  };

  export {
    Trigger as Trigger
  };
}
