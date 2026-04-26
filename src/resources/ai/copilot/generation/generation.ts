// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CancelAPI from './cancel';
import { Cancel } from './cancel';
import * as ResumeAPI from './resume';
import { Resume } from './resume';

export class Generation extends APIResource {
  cancel: CancelAPI.Cancel = new CancelAPI.Cancel(this._client);
  resume: ResumeAPI.Resume = new ResumeAPI.Resume(this._client);
}

Generation.Cancel = Cancel;
Generation.Resume = Resume;

export declare namespace Generation {
  export {
    Cancel as Cancel
  };

  export {
    Resume as Resume
  };
}
