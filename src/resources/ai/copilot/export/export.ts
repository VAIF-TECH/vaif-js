// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DockerAPI from './docker';
import { BaseDocker, Docker } from './docker';
import * as GitHubAPI from './github';
import { BaseGitHub, GitHub } from './github';
import * as ZipAPI from './zip';
import { BaseZip, Zip } from './zip';
import * as TerraformAPI from './terraform/terraform';
import { BaseTerraform, Terraform } from './terraform/terraform';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseExport extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'export'] = Object.freeze(['ai', 'copilot', 'export'] as const)

  create(versionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/export/${versionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Export extends BaseExport {
  docker: DockerAPI.Docker = new DockerAPI.Docker(this._client);
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  terraform: TerraformAPI.Terraform = new TerraformAPI.Terraform(this._client);
  zip: ZipAPI.Zip = new ZipAPI.Zip(this._client);
}

Export.Docker = Docker;
Export.BaseDocker = BaseDocker;
Export.GitHub = GitHub;
Export.BaseGitHub = BaseGitHub;
Export.Terraform = Terraform;
Export.BaseTerraform = BaseTerraform;
Export.Zip = Zip;
Export.BaseZip = BaseZip;

export declare namespace Export {
  export {
    Docker as Docker,
    BaseDocker as BaseDocker
  };

  export {
    GitHub as GitHub,
    BaseGitHub as BaseGitHub
  };

  export {
    Terraform as Terraform,
    BaseTerraform as BaseTerraform
  };

  export {
    Zip as Zip,
    BaseZip as BaseZip
  };
}
