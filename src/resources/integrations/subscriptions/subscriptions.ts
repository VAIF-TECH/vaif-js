// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project, ProjectRetrieveResponse } from './project';
import * as TestAPI from './test';
import { Test, TestTestResponse } from './test';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  test: TestAPI.Test = new TestAPI.Test(this._client);

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

  [k: string]: unknown
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

  [k: string]: unknown
  }
}

export interface SubscriptionDeleteResponse {
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

Subscriptions.Project = Project;
Subscriptions.Test = Test;

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams
  };

  export {
    Project as Project,
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };

  export {
    Test as Test,
    type TestTestResponse as TestTestResponse
  };
}
