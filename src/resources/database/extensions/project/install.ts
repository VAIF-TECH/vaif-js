// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseInstall extends APIResource {
  static override readonly _key: readonly ['database', 'extensions', 'project', 'install'] = Object.freeze(['database', 'extensions', 'project', 'install'] as const)

  install(projectID: string, body: InstallInstallParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/database/extensions/project/${projectID}/install`, { body, ...options });
  }
}
export class Install extends BaseInstall {

}

export type InstallInstallResponse = unknown

export interface InstallInstallParams {
  extensionId: string;

  config?: { [key: string]: unknown };

  envId?: string;
}

export declare namespace Install {
  export {
    type InstallInstallResponse as InstallInstallResponse,
    type InstallInstallParams as InstallInstallParams
  };
}
