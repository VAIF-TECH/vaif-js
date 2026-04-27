// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AckAPI from './ack';
import { Ack, AckAckResponse, BaseAck } from './ack';
import * as BulkAPI from './bulk';
import { BaseBulk, Bulk, BulkCreateParams, BulkCreateResponse } from './bulk';
import * as ProjectAPI from './project';
import { BaseProject, Project, ProjectRetrieveResponse } from './project';
import * as ResolveAPI from './resolve';
import { BaseResolve, Resolve, ResolveResolveResponse } from './resolve';

export class BaseIncidents extends APIResource {
  static override readonly _key: readonly ['incidents'] = Object.freeze(['incidents'] as const)

}
export class Incidents extends BaseIncidents {
  ack: AckAPI.Ack = new AckAPI.Ack(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
  resolve: ResolveAPI.Resolve = new ResolveAPI.Resolve(this._client);
}

Incidents.Ack = Ack;
Incidents.BaseAck = BaseAck;
Incidents.Bulk = Bulk;
Incidents.BaseBulk = BaseBulk;
Incidents.Project = Project;
Incidents.BaseProject = BaseProject;
Incidents.Resolve = Resolve;
Incidents.BaseResolve = BaseResolve;

export declare namespace Incidents {
  export {
    Ack as Ack,
    BaseAck as BaseAck,
    type AckAckResponse as AckAckResponse
  };

  export {
    Bulk as Bulk,
    BaseBulk as BaseBulk,
    type BulkCreateResponse as BulkCreateResponse,
    type BulkCreateParams as BulkCreateParams
  };

  export {
    Project as Project,
    BaseProject as BaseProject,
    type ProjectRetrieveResponse as ProjectRetrieveResponse
  };

  export {
    Resolve as Resolve,
    BaseResolve as BaseResolve,
    type ResolveResolveResponse as ResolveResolveResponse
  };
}
