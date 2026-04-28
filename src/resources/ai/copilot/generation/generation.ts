// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CancelAPI from './cancel';
import { BaseCancel, Cancel } from './cancel';
import * as ResumeAPI from './resume';
import { BaseResume, Resume } from './resume';

export class BaseGeneration extends APIResource {
  static override readonly _key: readonly ['ai', 'copilot', 'generation'] = Object.freeze([
    'ai',
    'copilot',
    'generation',
  ] as const);
}
export class Generation extends BaseGeneration {
  cancel: CancelAPI.Cancel = new CancelAPI.Cancel(this._client);
  resume: ResumeAPI.Resume = new ResumeAPI.Resume(this._client);
}

Generation.Cancel = Cancel;
Generation.BaseCancel = BaseCancel;
Generation.Resume = Resume;
Generation.BaseResume = BaseResume;

export declare namespace Generation {
  export { Cancel as Cancel, BaseCancel as BaseCancel };

  export { Resume as Resume, BaseResume as BaseResume };
}
