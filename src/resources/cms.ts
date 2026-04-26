// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cms extends APIResource {
  listCareers(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/cms/careers', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listPartners(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/cms/partners', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listTeam(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/cms/team', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listTestimonials(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/cms/testimonials', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveFaqs(pageSlug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/cms/faqs/${pageSlug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrievePage(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/cms/pages/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
