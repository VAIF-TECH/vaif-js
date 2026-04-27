// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAck extends APIResource {
  static override readonly _key: readonly ['incidents', 'ack'] = Object.freeze(['incidents', 'ack'] as const)

  /**
   * Acknowledge an incident
   */
  ack(incidentID: string, options?: RequestOptions): APIPromise<AckAckResponse> {
    return this._client.post(path`/incidents/${incidentID}/ack`, options);
  }
}
export class Ack extends BaseAck {

}

export interface AckAckResponse {
  ok: true;
}

export declare namespace Ack {
  export {
    type AckAckResponse as AckAckResponse
  };
}
