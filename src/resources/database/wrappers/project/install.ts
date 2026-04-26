// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Install extends APIResource {
  install(projectID: string, body: InstallInstallParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/database/wrappers/project/${projectID}/install`, { body, ...options });
  }
}

export type InstallInstallResponse = unknown

export interface InstallInstallParams {
  config: { [key: string]: unknown };

  wrapperId: string;

  enabledTables?: Array<string>;

  envId?: string;
}

export declare namespace Install {
  export {
    type InstallInstallResponse as InstallInstallResponse,
    type InstallInstallParams as InstallInstallParams
  };
}
