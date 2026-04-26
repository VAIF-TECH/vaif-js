// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CareersAPI from './careers';
import { Careers } from './careers';
import * as FaqsAPI from './faqs';
import { Faqs } from './faqs';
import * as PagesAPI from './pages';
import { Pages } from './pages';
import * as PartnersAPI from './partners';
import { Partners } from './partners';
import * as TeamAPI from './team';
import { Team } from './team';
import * as TestimonialsAPI from './testimonials';
import { Testimonials } from './testimonials';

export class Cms extends APIResource {
  careers: CareersAPI.Careers = new CareersAPI.Careers(this._client);
  faqs: FaqsAPI.Faqs = new FaqsAPI.Faqs(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  partners: PartnersAPI.Partners = new PartnersAPI.Partners(this._client);
  team: TeamAPI.Team = new TeamAPI.Team(this._client);
  testimonials: TestimonialsAPI.Testimonials = new TestimonialsAPI.Testimonials(this._client);
}

Cms.Careers = Careers;
Cms.Faqs = Faqs;
Cms.Pages = Pages;
Cms.Partners = Partners;
Cms.Team = Team;
Cms.Testimonials = Testimonials;

export declare namespace Cms {
  export {
    Careers as Careers
  };

  export {
    Faqs as Faqs
  };

  export {
    Pages as Pages
  };

  export {
    Partners as Partners
  };

  export {
    Team as Team
  };

  export {
    Testimonials as Testimonials
  };
}
