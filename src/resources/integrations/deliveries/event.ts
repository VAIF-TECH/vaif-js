// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseEvent extends APIResource {
  static override readonly _key: readonly ['integrations', 'deliveries', 'event'] = Object.freeze(['integrations', 'deliveries', 'event'] as const)

  /**
   * List deliveries for an event
   */
  retrieve(eventID: string, options?: RequestOptions): APIPromise<EventRetrieveResponse> {
    return this._client.get(path`/integrations/deliveries/event/${eventID}`, options);
  }
}
export class Event extends BaseEvent {

}

export interface EventRetrieveResponse {
  deliveries: Array<unknown>;
}

export declare namespace Event {
  export {
    type EventRetrieveResponse as EventRetrieveResponse
  };
}
