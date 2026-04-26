// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Resize extends APIResource {
  resize(instanceID: string, params: ResizeResizeParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params
    return this._client.post(path`/projects/${projectId}/infrastructure/${instanceID}/resize`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface ResizeResizeParams {
  projectId: string;
}

export declare namespace Resize {
  export {
    type ResizeResizeParams as ResizeResizeParams
  };
}
