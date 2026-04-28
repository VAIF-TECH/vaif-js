// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseResizeCustom extends APIResource {
  static override readonly _key: readonly ['projects', 'infrastructure', 'resizeCustom'] = Object.freeze([
    'projects',
    'infrastructure',
    'resizeCustom',
  ] as const);

  resizeCustom(
    instanceID: string,
    params: ResizeCustomResizeCustomParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId } = params;
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/resize-custom`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class ResizeCustom extends BaseResizeCustom {}

export interface ResizeCustomResizeCustomParams {
  projectId: string;
}

export declare namespace ResizeCustom {
  export { type ResizeCustomResizeCustomParams as ResizeCustomResizeCustomParams };
}
