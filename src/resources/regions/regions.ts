// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AllAPI from './all';
import { All } from './all';
import * as MetricsAPI from './metrics';
import { Metrics } from './metrics';
import * as HealthAPI from './health/health';
import { Health } from './health/health';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Regions extends APIResource {
  all: AllAPI.All = new AllAPI.All(this._client);
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/regions/', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  retrieve(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/regions/${key}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  update(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/regions/${key}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/regions/', { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

Regions.All = All;
Regions.Health = Health;
Regions.Metrics = Metrics;

export declare namespace Regions {
  export {
    All as All
  };

  export {
    Health as Health
  };

  export {
    Metrics as Metrics
  };
}
