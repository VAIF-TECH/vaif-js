// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CareersAPI from './careers';
import { BaseCareers, Careers } from './careers';
import * as FaqsAPI from './faqs';
import { BaseFaqs, Faqs } from './faqs';
import * as PagesAPI from './pages';
import { BasePages, Pages } from './pages';
import * as PartnersAPI from './partners';
import { BasePartners, Partners } from './partners';
import * as TeamAPI from './team';
import { BaseTeam, Team } from './team';
import * as TestimonialsAPI from './testimonials';
import { BaseTestimonials, Testimonials } from './testimonials';

export class BaseCms extends APIResource {
  static override readonly _key: readonly ['cms'] = Object.freeze(['cms'] as const);
}
export class Cms extends BaseCms {
  careers: CareersAPI.Careers = new CareersAPI.Careers(this._client);
  faqs: FaqsAPI.Faqs = new FaqsAPI.Faqs(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  partners: PartnersAPI.Partners = new PartnersAPI.Partners(this._client);
  team: TeamAPI.Team = new TeamAPI.Team(this._client);
  testimonials: TestimonialsAPI.Testimonials = new TestimonialsAPI.Testimonials(this._client);
}

Cms.Careers = Careers;
Cms.BaseCareers = BaseCareers;
Cms.Faqs = Faqs;
Cms.BaseFaqs = BaseFaqs;
Cms.Pages = Pages;
Cms.BasePages = BasePages;
Cms.Partners = Partners;
Cms.BasePartners = BasePartners;
Cms.Team = Team;
Cms.BaseTeam = BaseTeam;
Cms.Testimonials = Testimonials;
Cms.BaseTestimonials = BaseTestimonials;

export declare namespace Cms {
  export { Careers as Careers, BaseCareers as BaseCareers };

  export { Faqs as Faqs, BaseFaqs as BaseFaqs };

  export { Pages as Pages, BasePages as BasePages };

  export { Partners as Partners, BasePartners as BasePartners };

  export { Team as Team, BaseTeam as BaseTeam };

  export { Testimonials as Testimonials, BaseTestimonials as BaseTestimonials };
}
