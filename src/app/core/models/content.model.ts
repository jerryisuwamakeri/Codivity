import { IconName } from '../../shared/icon/icon.component';

export interface Service {
  slug: string;
  icon: IconName;
  iconBg: string;
  name: string;
  summary: string;
  heroDescription: string;
  highlights: { icon: IconName; title: string; description: string }[];
  offerings: string[];
  stats: { label: string; value: string }[];
}

export interface Solution {
  slug: string;
  icon: IconName;
  iconBg: string;
  name: string;
  summary: string;
  heroDescription: string;
  features: string[];
  relatedClient: string;
}

export interface Client {
  name: string;
  icon: IconName;
}

export interface PortfolioItem {
  slug: string;
  client: string;
  title: string;
  category: string;
  status: 'Completed' | 'In Progress';
  summary: string;
  description: string;
  results: string[];
  icon: IconName;
  accent: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}
