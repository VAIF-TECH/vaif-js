// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DockerAPI from './docker';
import { Docker } from './docker';
import * as GitHubAPI from './github';
import { GitHub } from './github';
import * as ZipAPI from './zip';
import { Zip } from './zip';
import * as TerraformAPI from './terraform/terraform';
import { Terraform } from './terraform/terraform';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Export extends APIResource {
  docker: DockerAPI.Docker = new DockerAPI.Docker(this._client);
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  terraform: TerraformAPI.Terraform = new TerraformAPI.Terraform(this._client);
  zip: ZipAPI.Zip = new ZipAPI.Zip(this._client);

  create(versionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/export/${versionID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Export.Docker = Docker;
Export.GitHub = GitHub;
Export.Terraform = Terraform;
Export.Zip = Zip;

export declare namespace Export {
  export {
    Docker as Docker
  };

  export {
    GitHub as GitHub
  };

  export {
    Terraform as Terraform
  };

  export {
    Zip as Zip
  };
}
