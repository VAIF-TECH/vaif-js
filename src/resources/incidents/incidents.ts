// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AckAPI from './ack';
import { Ack, AckAckResponse } from './ack';
import * as BulkAPI from './bulk';
import { Bulk, BulkCreateParams, BulkCreateResponse } from './bulk';
import * as ProjectAPI from './project';
import { Project, ProjectRetrieveResponse } from './project';
import * as ResolveAPI from './resolve';
import { Resolve, ResolveResolveResponse } from './resolve';

export class Incidents extends APIResource {
  ack: AckAPI.Ack = new AckAPI.Ack(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  resolve: ResolveAPI.Resolve = new ResolveAPI.Resolve(this._client);
}

Incidents.Ack = Ack;
Incidents.Bulk = Bulk;
Incidents.Project = Project;
Incidents.Resolve = Resolve;

export declare namespace Incidents {
  export {
    Ack as Ack,
    type AckAckResponse as AckAckResponse
  };

  export {
    Bulk as Bulk,
    type BulkCreateResponse as BulkCreateResponse,
    type BulkCreateParams as BulkCreateParams
  };

  export {
    Project as Project,
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };

  export {
    Resolve as Resolve,
    type ResolveResolveResponse as ResolveResolveResponse
  };
}
