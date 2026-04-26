// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AwsAPI from './aws';
import { Aws } from './aws';
import * as GcpAPI from './gcp';
import { Gcp } from './gcp';

export class Terraform extends APIResource {
  aws: AwsAPI.Aws = new AwsAPI.Aws(this._client);
  gcp: GcpAPI.Gcp = new GcpAPI.Gcp(this._client);
}

Terraform.Aws = Aws;
Terraform.Gcp = Gcp;

export declare namespace Terraform {
  export {
    Aws as Aws
  };

  export {
    Gcp as Gcp
  };
}
