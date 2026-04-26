// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HealthAPI from './health';
import { Health } from './health';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Regions extends APIResource {
  health: HealthAPI.Health = new HealthAPI.Health(this._client);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/regions/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieve(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/regions/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/regions/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/regions/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listAll(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/regions/all', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveMetrics(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/regions/${key}/metrics`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Regions.Health = Health;

export declare namespace Regions {
  export { Health as Health };
}
