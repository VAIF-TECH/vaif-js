// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyRevokeParams,
  APIKeyRotateParams,
  APIKeyUpdateParams,
  APIKeyUpdateResponse,
  APIKeys,
} from './api-keys';
import * as EnvVarsAPI from './env-vars';
import { EnvVarDeleteParams, EnvVarRetrieveValueParams, EnvVarUpdateParams, EnvVars } from './env-vars';
import * as EnvironmentsAPI from './environments';
import {
  EnvironmentDeleteParams,
  EnvironmentProvisionSslParams,
  EnvironmentRetrieveDomainStatusParams,
  EnvironmentRetrieveDomainVerificationParams,
  EnvironmentUpdateParams,
  EnvironmentVerifyCnameParams,
  EnvironmentVerifyDomainParams,
  Environments,
} from './environments';
import * as GitHubAPI from './github';
import { GitHub } from './github';
import * as MembersAPI from './members';
import { MemberDeleteParams, Members } from './members';
import * as RegionAPI from './region';
import { Region, RegionCreateParams, RegionCreateResponse } from './region';
import * as TerminalAPI from './terminal';
import { Terminal } from './terminal';
import * as AuthAPI from './auth/auth';
import {
  Auth,
  AuthForgotPasswordParams,
  AuthForgotPasswordResponse,
  AuthLoginParams,
  AuthLoginResponse,
  AuthResetPasswordParams,
  AuthResetPasswordResponse,
  AuthSignupParams,
  AuthSignupResponse,
} from './auth/auth';
import * as DatabaseAPI from './database/database';
import { Database } from './database/database';
import * as InfrastructureAPI from './infrastructure/infrastructure';
import {
  Infrastructure,
  InfrastructureDeleteParams,
  InfrastructureMigrateNowParams,
  InfrastructureReplicaParams,
  InfrastructureResizeCustomParams,
  InfrastructureResizeParams,
  InfrastructureRetrieveMetricsParams,
  InfrastructureRetrieveReplicasParams,
  InfrastructureRetrieveUpgradeOptionsParams,
  InfrastructureStartParams,
  InfrastructureStopParams,
} from './infrastructure/infrastructure';
import * as SettingsAPI from './settings/settings';
import { Settings } from './settings/settings';
import * as StorageAPI from './storage/storage';
import { Storage } from './storage/storage';
import * as UsersAPI from './users/users';
import {
  UserBanParams,
  UserBanResponse,
  UserCreateParams,
  UserCreateResponse,
  UserDeleteParams,
  UserRetrieveParams,
  UserUnbanParams,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users/users';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  region: RegionAPI.Region = new RegionAPI.Region(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
  storage: StorageAPI.Storage = new StorageAPI.Storage(this._client);
  envVars: EnvVarsAPI.EnvVars = new EnvVarsAPI.EnvVars(this._client);
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  infrastructure: InfrastructureAPI.Infrastructure = new InfrastructureAPI.Infrastructure(this._client);
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  terminal: TerminalAPI.Terminal = new TerminalAPI.Terminal(this._client);

  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/projects/', { body, ...options });
  }

  update(
    projectID: string,
    body: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProjectUpdateResponse> {
    return this._client.patch(path`/projects/${projectID}`, { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/projects/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/projects/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve0(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve1(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/project', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProjectCreateResponse {
  apiKey: string;

  apiKeyId: string;

  environments: Array<unknown>;

  environment?: unknown;

  project?: unknown;

  [k: string]: unknown;
}

export interface ProjectUpdateResponse {
  project?: unknown;
}

export interface ProjectCreateParams {
  name: string;

  orgId: string;

  features?: ProjectCreateParams.Features;

  regionKey?: string;

  slug?: string;
}

export namespace ProjectCreateParams {
  export interface Features {
    ai?: boolean;

    analytics?: boolean;

    auth?: boolean;

    database?: boolean;

    functions?: boolean;

    realtime?: boolean;

    scheduling?: boolean;

    storage?: boolean;
  }
}

export interface ProjectUpdateParams {
  defaultEnvironment?: 'development' | 'staging' | 'production';

  description?: string | null;

  features?: { [key: string]: boolean };

  name?: string;

  timezone?: string;
}

Projects.Region = Region;
Projects.APIKeys = APIKeys;
Projects.Settings = Settings;
Projects.Members = Members;
Projects.Environments = Environments;
Projects.Storage = Storage;
Projects.EnvVars = EnvVars;
Projects.Database = Database;
Projects.Users = Users;
Projects.Auth = Auth;
Projects.Infrastructure = Infrastructure;
Projects.GitHub = GitHub;
Projects.Terminal = Terminal;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export {
    Region as Region,
    type RegionCreateResponse as RegionCreateResponse,
    type RegionCreateParams as RegionCreateParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
    type APIKeyRotateParams as APIKeyRotateParams,
  };

  export { Settings as Settings };

  export { Members as Members, type MemberDeleteParams as MemberDeleteParams };

  export {
    Environments as Environments,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentProvisionSslParams as EnvironmentProvisionSslParams,
    type EnvironmentRetrieveDomainStatusParams as EnvironmentRetrieveDomainStatusParams,
    type EnvironmentRetrieveDomainVerificationParams as EnvironmentRetrieveDomainVerificationParams,
    type EnvironmentVerifyCnameParams as EnvironmentVerifyCnameParams,
    type EnvironmentVerifyDomainParams as EnvironmentVerifyDomainParams,
  };

  export { Storage as Storage };

  export {
    EnvVars as EnvVars,
    type EnvVarUpdateParams as EnvVarUpdateParams,
    type EnvVarDeleteParams as EnvVarDeleteParams,
    type EnvVarRetrieveValueParams as EnvVarRetrieveValueParams,
  };

  export { Database as Database };

  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserBanResponse as UserBanResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
    type UserBanParams as UserBanParams,
    type UserUnbanParams as UserUnbanParams,
  };

  export {
    Auth as Auth,
    type AuthForgotPasswordResponse as AuthForgotPasswordResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthResetPasswordResponse as AuthResetPasswordResponse,
    type AuthSignupResponse as AuthSignupResponse,
    type AuthForgotPasswordParams as AuthForgotPasswordParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthResetPasswordParams as AuthResetPasswordParams,
    type AuthSignupParams as AuthSignupParams,
  };

  export {
    Infrastructure as Infrastructure,
    type InfrastructureDeleteParams as InfrastructureDeleteParams,
    type InfrastructureMigrateNowParams as InfrastructureMigrateNowParams,
    type InfrastructureReplicaParams as InfrastructureReplicaParams,
    type InfrastructureResizeParams as InfrastructureResizeParams,
    type InfrastructureResizeCustomParams as InfrastructureResizeCustomParams,
    type InfrastructureRetrieveMetricsParams as InfrastructureRetrieveMetricsParams,
    type InfrastructureRetrieveReplicasParams as InfrastructureRetrieveReplicasParams,
    type InfrastructureRetrieveUpgradeOptionsParams as InfrastructureRetrieveUpgradeOptionsParams,
    type InfrastructureStartParams as InfrastructureStartParams,
    type InfrastructureStopParams as InfrastructureStopParams,
  };

  export { GitHub as GitHub };

  export { Terminal as Terminal };
}
