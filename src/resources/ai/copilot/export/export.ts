// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TerraformAPI from './terraform';
import { Terraform } from './terraform';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Export extends APIResource {
  terraform: TerraformAPI.Terraform = new TerraformAPI.Terraform(this._client);

  update(versionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/ai/copilot/export/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  docker(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/export/docker', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  github(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/export/github', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  zip(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/copilot/export/zip', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Export.Terraform = Terraform;

export declare namespace Export {
  export { Terraform as Terraform };
}
