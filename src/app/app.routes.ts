import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Codivity — Digital Solutions for Modern Businesses',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us — Codivity',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services-list/services-list.component').then(
        (m) => m.ServicesListComponent
      ),
    title: 'Services — Codivity',
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./pages/services/service-detail/service-detail.component').then(
        (m) => m.ServiceDetailComponent
      ),
  },
  {
    path: 'solutions',
    loadComponent: () =>
      import('./pages/solutions/solutions-list/solutions-list.component').then(
        (m) => m.SolutionsListComponent
      ),
    title: 'Solutions — Codivity',
  },
  {
    path: 'solutions/:slug',
    loadComponent: () =>
      import('./pages/solutions/solution-detail/solution-detail.component').then(
        (m) => m.SolutionDetailComponent
      ),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio-list/portfolio-list.component').then(
        (m) => m.PortfolioListComponent
      ),
    title: 'Portfolio — Codivity',
  },
  {
    path: 'portfolio/:slug',
    loadComponent: () =>
      import('./pages/portfolio/portfolio-detail/portfolio-detail.component').then(
        (m) => m.PortfolioDetailComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then((m) => m.FaqComponent),
    title: 'FAQs — Codivity',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Codivity',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found — Codivity',
  },
];
