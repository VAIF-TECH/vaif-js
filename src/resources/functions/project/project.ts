// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NameAPI from './name';
import { BaseName, Name, NameRetrieveParams } from './name';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProject extends APIResource {
  static override readonly _key: readonly ['functions', 'project'] = Object.freeze([
    'functions',
    'project',
  ] as const);

  retrieve(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/functions/project/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Project extends BaseProject {
  name: NameAPI.Name = new NameAPI.Name(this._client);
}

Project.Name = Name;
Project.BaseName = BaseName;

export declare namespace Project {
  export { Name as Name, BaseName as BaseName, type NameRetrieveParams as NameRetrieveParams };
}
