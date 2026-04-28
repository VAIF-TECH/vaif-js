// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['projects', 'settings'] = Object.freeze([
    'projects',
    'settings',
  ] as const);

  addons(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/projects/${projectID}/settings/addons`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  api(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/projects/${projectID}/settings/api`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  compute(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/projects/${projectID}/settings/compute`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getAddons(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/settings/addons`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getAPI(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/settings/api`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getCompute(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/settings/compute`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getJwt(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/settings/jwt`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getSettings(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/projects/${projectID}/settings`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  jwt(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/projects/${projectID}/settings/jwt`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  rotate(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/projects/${projectID}/settings/jwt/rotate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Settings extends BaseSettings {}
