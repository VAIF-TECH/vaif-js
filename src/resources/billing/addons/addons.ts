// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CatalogAPI from './catalog';
import { BaseCatalog, Catalog } from './catalog';

export class BaseAddons extends APIResource {
  static override readonly _key: readonly ['billing', 'addons'] = Object.freeze(['billing', 'addons'] as const)

}
export class Addons extends BaseAddons {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
}

Addons.Catalog = Catalog;
Addons.BaseCatalog = BaseCatalog;

export declare namespace Addons {
  export {
    Catalog as Catalog,
    BaseCatalog as BaseCatalog
  };
}
