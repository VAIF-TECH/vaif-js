// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NameAPI from './name';
import { Name, NameRetrieveParams } from './name';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Project extends APIResource {
  name: NameAPI.Name = new NameAPI.Name(this._client);

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/project/${projectID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Project.Name = Name;

export declare namespace Project {
  export {
    Name as Name,
    type NameRetrieveParams as NameRetrieveParams
  };
}
