// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DlqAPI from './dlq/dlq';
import { Dlq } from './dlq/dlq';
import * as WebhooksAPI from './webhooks/webhooks';
import { Webhooks } from './webhooks/webhooks';

export class Jobs extends APIResource {
  dlq: DlqAPI.Dlq = new DlqAPI.Dlq(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Jobs.Dlq = Dlq;
Jobs.Webhooks = Webhooks;

export declare namespace Jobs {
  export {
    Dlq as Dlq
  };

  export {
    Webhooks as Webhooks
  };
}
