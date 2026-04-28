// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AwsAPI from './aws';
import { Aws, BaseAws } from './aws';
import * as GcpAPI from './gcp';
import { BaseGcp, Gcp } from './gcp';

export class BaseTerraform extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'export', 'terraform'] = Object.freeze([
    'ai',
    'copilot',
    'export',
    'terraform',
  ] as const);
}
export class Terraform extends BaseTerraform {
  aws: AwsAPI.Aws = new AwsAPI.Aws(this._client);
  gcp: GcpAPI.Gcp = new GcpAPI.Gcp(this._client);
}

Terraform.Aws = Aws;
Terraform.BaseAws = BaseAws;
Terraform.Gcp = Gcp;
Terraform.BaseGcp = BaseGcp;

export declare namespace Terraform {
  export { Aws as Aws, BaseAws as BaseAws };

  export { Gcp as Gcp, BaseGcp as BaseGcp };
}
