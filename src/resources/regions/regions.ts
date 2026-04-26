// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AllAPI from './all';
import { All, BaseAll } from './all';
import * as MetricsAPI from './metrics';
import { BaseMetrics, Metrics } from './metrics';
import * as HealthAPI from './health/health';
import { BaseHealth, Health } from './health/health';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRegions extends APIResource {
  static override readonly _key: readonly ['regions'] = Object.freeze(['regions'] as const)

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
export class Regions extends BaseRegions {
  all: AllAPI.All = new AllAPI.All(this._client);
  health: HealthAPI.Health = new HealthAPI.Health(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
}

Regions.All = All;
Regions.BaseAll = BaseAll;
Regions.Health = Health;
Regions.BaseHealth = BaseHealth;
Regions.Metrics = Metrics;
Regions.BaseMetrics = BaseMetrics;

export declare namespace Regions {
  export {
    All as All,
    BaseAll as BaseAll
  };

  export {
    Health as Health,
    BaseHealth as BaseHealth
  };

  export {
    Metrics as Metrics,
    BaseMetrics as BaseMetrics
  };
}
