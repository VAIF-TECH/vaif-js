// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveryAPI from './delivery';
import { BaseDelivery, Delivery } from './delivery';
import * as ProjectAPI from './project';
import { BaseProject, Project } from './project';

export class BaseWebhooks extends APIResource {
  static override readonly _key: readonly ['jobs', 'webhooks'] = Object.freeze(['jobs', 'webhooks'] as const);
}
export class Webhooks extends BaseWebhooks {
  delivery: DeliveryAPI.Delivery = new DeliveryAPI.Delivery(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Webhooks.Delivery = Delivery;
Webhooks.BaseDelivery = BaseDelivery;
Webhooks.Project = Project;
Webhooks.BaseProject = BaseProject;

export declare namespace Webhooks {
  export { Delivery as Delivery, BaseDelivery as BaseDelivery };

  export { Project as Project, BaseProject as BaseProject };
}
