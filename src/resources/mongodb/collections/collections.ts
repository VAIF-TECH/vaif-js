// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RenameAPI from './rename';
import { BaseRename, Rename } from './rename';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCollections extends APIResource {
  static override readonly _key: readonly ['mongoDB', 'collections'] = Object.freeze(['mongoDB', 'collections'] as const)

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/mongodb/collections', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/mongodb/collections', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  delete(name: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/mongodb/collections/${name}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}
export class Collections extends BaseCollections {
  rename: RenameAPI.Rename = new RenameAPI.Rename(this._client);
}

Collections.Rename = Rename;
Collections.BaseRename = BaseRename;

export declare namespace Collections {
  export {
    Rename as Rename,
    BaseRename as BaseRename
  };
}
