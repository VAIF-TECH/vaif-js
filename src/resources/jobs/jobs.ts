// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DlqAPI from './dlq/dlq';
import { BaseDlq, Dlq } from './dlq/dlq';
import * as WebhooksAPI from './webhooks/webhooks';
import { BaseWebhooks, Webhooks } from './webhooks/webhooks';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['jobs'] = Object.freeze(['jobs'] as const)

}
export class Jobs extends BaseJobs {
  dlq: DlqAPI.Dlq = new DlqAPI.Dlq(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Jobs.Dlq = Dlq;
Jobs.BaseDlq = BaseDlq;
Jobs.Webhooks = Webhooks;
Jobs.BaseWebhooks = BaseWebhooks;

export declare namespace Jobs {
  export {
    Dlq as Dlq,
    BaseDlq as BaseDlq
  };

  export {
    Webhooks as Webhooks,
    BaseWebhooks as BaseWebhooks
  };
}
