// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthConfirmParams, AuthConfirmResponse, AuthDeleteParams, AuthForgotPasswordParams, AuthForgotPasswordResponse, AuthLoginParams, AuthLoginResponse, AuthResetPasswordParams, AuthResetPasswordResponse, AuthSettingsParams, AuthSettingsResponse, AuthSignupParams, AuthSignupResponse, AuthUpdateParams, AuthUpdateResponse, BaseAuth } from './auth';
import * as DatabaseAPI from './database';
import { BaseDatabase, Database, DatabaseDedicatedParams, DatabaseDedicatedResponse } from './database';
import * as GitHubAPI from './github';
import { BaseGitHub, GitHub } from './github';
import * as MembersAPI from './members';
import { BaseMembers, MemberDeleteParams, Members } from './members';
import * as RegionAPI from './region';
import { BaseRegion, Region, RegionRegionParams, RegionRegionResponse } from './region';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as StorageAPI from './storage';
import { BaseStorage, Storage, StorageSettingsParams, StorageSettingsResponse } from './storage';
import * as TerminalAPI from './terminal';
import { BaseTerminal, Terminal } from './terminal';
import * as APIKeysAPI from './api-keys/api-keys';
import { APIKeyAPIKeysParams, APIKeyAPIKeysResponse, APIKeyUpdateParams, APIKeyUpdateResponse, APIKeys, BaseAPIKeys } from './api-keys/api-keys';
import * as EnvVarsAPI from './env-vars/env-vars';
import { BaseEnvVars, EnvVarDeleteParams, EnvVarUpdateParams, EnvVars } from './env-vars/env-vars';
import * as EnvironmentsAPI from './environments/environments';
import { BaseEnvironments, EnvironmentDeleteParams, EnvironmentUpdateParams, Environments } from './environments/environments';
import * as InfrastructureAPI from './infrastructure/infrastructure';
import { BaseInfrastructure, Infrastructure, InfrastructureDeleteParams } from './infrastructure/infrastructure';
import * as UsersAPI from './users/users';
import { BaseUsers, UserDeleteParams, UserRetrieveParams, UserUpdateParams, UserUpdateResponse, UserUsersParams, UserUsersResponse, Users } from './users/users';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseProjects extends APIResource {
  static override readonly _key: readonly ['projects'] = Object.freeze(['projects'] as const)

  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/projects/', { body, ...options });
  }

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  update(projectID: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<ProjectUpdateResponse> {
    return this._client.patch(path`/projects/${projectID}`, { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/projects/', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/projects/${projectID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Projects extends BaseProjects {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
  envVars: EnvVarsAPI.EnvVars = new EnvVarsAPI.EnvVars(this._client);
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  infrastructure: InfrastructureAPI.Infrastructure = new InfrastructureAPI.Infrastructure(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  region: RegionAPI.Region = new RegionAPI.Region(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  storage: StorageAPI.Storage = new StorageAPI.Storage(this._client);
  terminal: TerminalAPI.Terminal = new TerminalAPI.Terminal(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export interface ProjectCreateResponse {
  apiKey: string;

  apiKeyId: string;

  environments: Array<unknown>;

  environment?: unknown;

  project?: unknown;

[k: string]: unknown
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

Projects.APIKeys = APIKeys;
Projects.BaseAPIKeys = BaseAPIKeys;
Projects.Auth = Auth;
Projects.BaseAuth = BaseAuth;
Projects.Database = Database;
Projects.BaseDatabase = BaseDatabase;
Projects.EnvVars = EnvVars;
Projects.BaseEnvVars = BaseEnvVars;
Projects.Environments = Environments;
Projects.BaseEnvironments = BaseEnvironments;
Projects.GitHub = GitHub;
Projects.BaseGitHub = BaseGitHub;
Projects.Infrastructure = Infrastructure;
Projects.BaseInfrastructure = BaseInfrastructure;
Projects.Members = Members;
Projects.BaseMembers = BaseMembers;
Projects.Region = Region;
Projects.BaseRegion = BaseRegion;
Projects.Settings = Settings;
Projects.BaseSettings = BaseSettings;
Projects.Storage = Storage;
Projects.BaseStorage = BaseStorage;
Projects.Terminal = Terminal;
Projects.BaseTerminal = BaseTerminal;
Projects.Users = Users;
Projects.BaseUsers = BaseUsers;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams
  };

  export {
    APIKeys as APIKeys,
    BaseAPIKeys as BaseAPIKeys,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyAPIKeysResponse as APIKeyAPIKeysResponse,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyAPIKeysParams as APIKeyAPIKeysParams
  };

  export {
    Auth as Auth,
    BaseAuth as BaseAuth,
    type AuthUpdateResponse as AuthUpdateResponse,
    type AuthConfirmResponse as AuthConfirmResponse,
    type AuthForgotPasswordResponse as AuthForgotPasswordResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthResetPasswordResponse as AuthResetPasswordResponse,
    type AuthSettingsResponse as AuthSettingsResponse,
    type AuthSignupResponse as AuthSignupResponse,
    type AuthUpdateParams as AuthUpdateParams,
    type AuthDeleteParams as AuthDeleteParams,
    type AuthConfirmParams as AuthConfirmParams,
    type AuthForgotPasswordParams as AuthForgotPasswordParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthResetPasswordParams as AuthResetPasswordParams,
    type AuthSettingsParams as AuthSettingsParams,
    type AuthSignupParams as AuthSignupParams
  };

  export {
    Database as Database,
    BaseDatabase as BaseDatabase,
    type DatabaseDedicatedResponse as DatabaseDedicatedResponse,
    type DatabaseDedicatedParams as DatabaseDedicatedParams
  };

  export {
    EnvVars as EnvVars,
    BaseEnvVars as BaseEnvVars,
    type EnvVarUpdateParams as EnvVarUpdateParams,
    type EnvVarDeleteParams as EnvVarDeleteParams
  };

  export {
    Environments as Environments,
    BaseEnvironments as BaseEnvironments,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams
  };

  export {
    GitHub as GitHub,
    BaseGitHub as BaseGitHub
  };

  export {
    Infrastructure as Infrastructure,
    BaseInfrastructure as BaseInfrastructure,
    type InfrastructureDeleteParams as InfrastructureDeleteParams
  };

  export {
    Members as Members,
    BaseMembers as BaseMembers,
    type MemberDeleteParams as MemberDeleteParams
  };

  export {
    Region as Region,
    BaseRegion as BaseRegion,
    type RegionRegionResponse as RegionRegionResponse,
    type RegionRegionParams as RegionRegionParams
  };

  export {
    Settings as Settings,
    BaseSettings as BaseSettings
  };

  export {
    Storage as Storage,
    BaseStorage as BaseStorage,
    type StorageSettingsResponse as StorageSettingsResponse,
    type StorageSettingsParams as StorageSettingsParams
  };

  export {
    Terminal as Terminal,
    BaseTerminal as BaseTerminal
  };

  export {
    Users as Users,
    BaseUsers as BaseUsers,
    type UserUpdateResponse as UserUpdateResponse,
    type UserUsersResponse as UserUsersResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
    type UserUsersParams as UserUsersParams
  };
}
