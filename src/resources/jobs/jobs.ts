// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DlqAPI from './dlq';
import { Dlq } from './dlq';
import * as WebhooksAPI from './webhooks';
import { Webhooks } from './webhooks';

export class Jobs extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  dlq: DlqAPI.Dlq = new DlqAPI.Dlq(this._client);
}

Jobs.Webhooks = Webhooks;
Jobs.Dlq = Dlq;

export declare namespace Jobs {
  export { Webhooks as Webhooks };

  export { Dlq as Dlq };
}
