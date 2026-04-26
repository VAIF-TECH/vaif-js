// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetadataAPI from './metadata';
import { Metadata } from './metadata';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Files extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  copy(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/storage/files/copy', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteBatch(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/storage/files/delete-batch', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  move(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/storage/files/move', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Files.Metadata = Metadata;

export declare namespace Files {
  export { Metadata as Metadata };
}
