// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveryAPI from './delivery';
import { Delivery } from './delivery';
import * as ProjectAPI from './project';
import { Project } from './project';

export class Webhooks extends APIResource {
  delivery: DeliveryAPI.Delivery = new DeliveryAPI.Delivery(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

Webhooks.Delivery = Delivery;
Webhooks.Project = Project;

export declare namespace Webhooks {
  export {
    Delivery as Delivery
  };

  export {
    Project as Project
  };
}
