// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create an integration subscription
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/integrations/subscriptions', { body, ...options });
  }

  /**
   * Update an integration subscription
   */
  update(id: string, options?: RequestOptions): APIPromise<SubscriptionUpdateResponse> {
    return this._client.patch(path`/integrations/subscriptions/${id}`, options);
  }

  /**
   * Delete an integration subscription
   */
  delete(id: string, options?: RequestOptions): APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(path`/integrations/subscriptions/${id}`, options);
  }

  /**
   * List integration subscriptions for a project
   */
  listForProject(
    projectID: string,
    options?: RequestOptions,
  ): APIPromise<SubscriptionListForProjectResponse> {
    return this._client.get(path`/integrations/subscriptions/project/${projectID}`, options);
  }

  /**
   * Send a test event to an integration subscription
   */
  sendTestEvent(id: string, options?: RequestOptions): APIPromise<SubscriptionSendTestEventResponse> {
    return this._client.post(path`/integrations/subscriptions/${id}/test`, options);
  }
}

export interface SubscriptionCreateResponse {
  ok: true;

  subscription: SubscriptionCreateResponse.Subscription;
}

export namespace SubscriptionCreateResponse {
  export interface Subscription {
    id: string;

    name: string;

    projectId: string;

    type: string;

    config?: unknown;

    createdAt?: string | (string & {});

    envId?: string | null;

    eventFilter?: unknown;

    updatedAt?: string | (string & {});

    [k: string]: unknown;
  }
}

export interface SubscriptionUpdateResponse {
  ok: true;

  subscription: SubscriptionUpdateResponse.Subscription;
}

export namespace SubscriptionUpdateResponse {
  export interface Subscription {
    id: string;

    name: string;

    projectId: string;

    type: string;

    config?: unknown;

    createdAt?: string | (string & {});

    envId?: string | null;

    eventFilter?: unknown;

    updatedAt?: string | (string & {});

    [k: string]: unknown;
  }
}

export interface SubscriptionDeleteResponse {
  ok: true;
}

export interface SubscriptionListForProjectResponse {
  subscriptions: Array<SubscriptionListForProjectResponse.Subscription>;
}

export namespace SubscriptionListForProjectResponse {
  export interface Subscription {
    id: string;

    name: string;

    projectId: string;

    type: string;

    config?: unknown;

    createdAt?: string | (string & {});

    envId?: string | null;

    eventFilter?: unknown;

    updatedAt?: string | (string & {});

    [k: string]: unknown;
  }
}

export interface SubscriptionSendTestEventResponse {
  ok: true;
}

export interface SubscriptionCreateParams {
  config: SubscriptionCreateParams.Config;

  eventFilter: SubscriptionCreateParams.EventFilter;

  name: string;

  projectId: string;

  type: 'webhook' | 'analytics' | 'slack' | 'discord';

  envId?: string;
}

export namespace SubscriptionCreateParams {
  export interface Config {
    apiKey?: string;

    apiSecret?: string;

    headers?: { [key: string]: string };

    measurementId?: string;

    projectId?: string;

    provider?: string;

    secret?: string;

    url?: string;
  }

  export interface EventFilter {
    allow?: Array<string>;
  }
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionListForProjectResponse as SubscriptionListForProjectResponse,
    type SubscriptionSendTestEventResponse as SubscriptionSendTestEventResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };
}
