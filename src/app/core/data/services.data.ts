import { Service } from '../models/content.model';

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    icon: 'code',
    iconBg: 'bg-brand-50 text-brand-600',
    name: 'Web Development',
    summary:
      'We build modern, responsive and high-performance websites and web applications tailored to your business goals.',
    heroDescription:
      'We create powerful, responsive and scalable web applications that help your business stand out and grow online.',
    highlights: [
      {
        icon: 'layers',
        title: 'Modern Technologies',
        description: 'We use the latest tools and frameworks to build fast and future-ready solutions.',
      },
      {
        icon: 'compass',
        title: 'Responsive Design',
        description: 'Every website we build looks great and works perfectly on all devices.',
      },
      {
        icon: 'bolt',
        title: 'Performance Focused',
        description: 'We optimize for speed, SEO and performance to deliver the best experience.',
      },
    ],
    offerings: [
      'Custom Website Development',
      'E-commerce Solutions',
      'CMS Development (WordPress, Headless CMS)',
      'Web Application Development',
      'Landing Pages & Marketing Sites',
      'Website Redesign & Optimization',
      'API Integration & Third-party Services',
    ],
    stats: [
      { label: 'Lighthouse score', value: '98+' },
      { label: 'Avg. build time', value: '4-8 wks' },
    ],
  },
  {
    slug: 'mobile-app-development',
    icon: 'mobile',
    iconBg: 'bg-brand-50 text-brand-600',
    name: 'Mobile App Development',
    summary:
      'Cross-platform apps for iOS and Android that deliver seamless performance and exceptional user experience.',
    heroDescription:
      'We design and build native-feeling mobile apps that help your business reach customers wherever they are.',
    highlights: [
      {
        icon: 'layers',
        title: 'Cross-Platform',
        description: 'One codebase, native performance on both iOS and Android.',
      },
      {
        icon: 'compass',
        title: 'Intuitive UX',
        description: 'Interfaces designed around how your users actually behave.',
      },
      {
        icon: 'bolt',
        title: 'Store-Ready',
        description: 'We handle release management, App Store and Play Store submission.',
      },
    ],
    offerings: [
      'iOS & Android App Development',
      'Cross-Platform Development (Flutter, React Native)',
      'App UI/UX Design',
      'Push Notifications & Offline Support',
      'Payment & Wallet Integration',
      'App Store & Play Store Deployment',
      'Post-Launch Maintenance',
    ],
    stats: [
      { label: 'Avg. crash-free rate', value: '99.5%' },
      { label: 'Platforms supported', value: 'iOS & Android' },
    ],
  },
  {
    slug: 'backend-api-development',
    icon: 'cloud',
    iconBg: 'bg-violet-50 text-violet-600',
    name: 'Backend & API Development',
    summary:
      'Scalable, secure and high-performance APIs and backend systems that power your digital products.',
    heroDescription:
      'We architect resilient backend systems and APIs that scale with your business, from MVP to millions of users.',
    highlights: [
      {
        icon: 'shield',
        title: 'Secure by Design',
        description: 'Authentication, authorization and data protection built in from day one.',
      },
      {
        icon: 'layers',
        title: 'Built to Scale',
        description: 'Cloud-native architecture that grows with your user base.',
      },
      {
        icon: 'bolt',
        title: 'High Availability',
        description: 'Monitored, resilient infrastructure with minimal downtime.',
      },
    ],
    offerings: [
      'REST & GraphQL API Development',
      'Database Design & Optimization',
      'Cloud Infrastructure (AWS, GCP, Azure)',
      'Server Setup & Configuration',
      'Microservices Architecture',
      'Third-Party & Payment Integrations',
      'DevOps & CI/CD Pipelines',
      'Monitoring, Logging & Support',
    ],
    stats: [
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'Avg. API response', value: '<150ms' },
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: 'swatch',
    iconBg: 'bg-sky-50 text-sky-600',
    name: 'UI/UX Design',
    summary: 'Beautiful, user-centered designs that enhance engagement and drive conversions.',
    heroDescription:
      'We design intuitive, on-brand digital experiences that make your product a pleasure to use — and easy to grow.',
    highlights: [
      {
        icon: 'target',
        title: 'User-Centered',
        description: 'Every decision is grounded in research and real user behavior.',
      },
      {
        icon: 'swatch',
        title: 'On-Brand Systems',
        description: 'Design systems that keep your product consistent as it scales.',
      },
      {
        icon: 'bolt',
        title: 'Conversion Focused',
        description: 'Interfaces crafted to move users toward the action that matters.',
      },
    ],
    offerings: [
      'User Research & Journey Mapping',
      'Wireframing & Prototyping',
      'UI Design Systems & Component Libraries',
      'Mobile & Web App Design',
      'Usability Testing',
      'Brand & Visual Identity',
      'Design-to-Development Handoff',
    ],
    stats: [
      { label: 'Avg. usability score', value: '92/100' },
      { label: 'Design iterations', value: 'Unlimited' },
    ],
  },
  {
    slug: 'product-strategy',
    icon: 'chart',
    iconBg: 'bg-emerald-50 text-emerald-600',
    name: 'Product Strategy',
    summary:
      'We help you validate ideas, craft strategies, and build products that solve real problems.',
    heroDescription:
      'We help founders and teams turn ideas into validated, well-scoped products with a clear path to launch.',
    highlights: [
      {
        icon: 'target',
        title: 'Validated Ideas',
        description: 'We test assumptions early so you build the right thing.',
      },
      {
        icon: 'compass',
        title: 'Clear Roadmaps',
        description: 'A phased plan that balances speed, scope and budget.',
      },
      {
        icon: 'chart',
        title: 'Metrics That Matter',
        description: 'We define the KPIs that show whether the product is working.',
      },
    ],
    offerings: [
      'Product Discovery Workshops',
      'Market & Competitor Research',
      'MVP Scoping & Roadmapping',
      'Feature Prioritization',
      'Technical Feasibility Assessment',
      'Go-To-Market Strategy',
      'Analytics & KPI Setup',
    ],
    stats: [
      { label: 'Avg. discovery sprint', value: '2 wks' },
      { label: 'Products launched', value: '20+' },
    ],
  },
  {
    slug: 'maintenance-support',
    icon: 'support',
    iconBg: 'bg-amber-50 text-amber-600',
    name: 'Maintenance & Support',
    summary: 'Ongoing support and maintenance to keep your systems updated and running smoothly.',
    heroDescription:
      'We keep your product healthy after launch — monitoring, patching, and improving it so you can focus on growth.',
    highlights: [
      {
        icon: 'shield',
        title: 'Proactive Monitoring',
        description: 'We catch issues before they become downtime.',
      },
      {
        icon: 'clock',
        title: 'Fast Response',
        description: 'Clear SLAs so you always know when to expect a fix.',
      },
      {
        icon: 'bolt',
        title: 'Continuous Improvement',
        description: 'Regular updates, dependency upgrades and performance tuning.',
      },
    ],
    offerings: [
      'Bug Fixes & Issue Resolution',
      'Security Patching & Updates',
      'Server Setup, Monitoring & Management',
      'Performance Monitoring',
      'Hosting & Infrastructure Management',
      'Feature Enhancements',
      'Uptime & Incident Response',
      'Monthly Reporting',
      'Maintenance Retainers & Support Contracts (SLAs)',
    ],
    stats: [
      { label: 'Avg. response time', value: '<4 hrs' },
      { label: 'Support plans', value: '24/7 available' },
    ],
  },
  {
    slug: 'server-it-infrastructure',
    icon: 'server',
    iconBg: 'bg-indigo-50 text-indigo-600',
    name: 'Server Setup & IT Infrastructure',
    summary:
      'Server setup, cloud infrastructure and IT automation for businesses that need reliable systems, not just software.',
    heroDescription:
      'Beyond web and mobile, we set up and manage the servers, networks and automation that keep your business running.',
    highlights: [
      {
        icon: 'server',
        title: 'Server & Cloud Setup',
        description: 'From a single VPS to multi-server cloud infrastructure, configured right.',
      },
      {
        icon: 'workflow',
        title: 'IT Automation',
        description: 'We automate deployments, backups and routine IT tasks so nothing relies on manual work.',
      },
      {
        icon: 'shield',
        title: 'Secure & Monitored',
        description: 'Firewalls, access control and monitoring configured from day one.',
      },
    ],
    offerings: [
      'Server Setup & Configuration',
      'Cloud Infrastructure Setup (AWS, GCP, Azure)',
      'Network & Systems Administration',
      'IT Process Automation & Scripting',
      'Backup & Disaster Recovery Planning',
      'Infrastructure Monitoring & Alerting',
      'IT Support & Managed Services',
    ],
    stats: [
      { label: 'Setup turnaround', value: '1-2 wks' },
      { label: 'Monitoring', value: '24/7' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const PROCESS_STEPS = [
  {
    index: '01',
    title: 'Discover',
    description: 'We understand your business, goals and requirements.',
  },
  {
    index: '02',
    title: 'Plan',
    description: 'We create a roadmap and strategy tailored to your needs.',
  },
  {
    index: '03',
    title: 'Design',
    description: 'We design intuitive interfaces that reflect your brand.',
  },
  {
    index: '04',
    title: 'Develop',
    description: 'We build robust and scalable solutions with clean code.',
  },
  {
    index: '05',
    title: 'Launch & Support',
    description: 'We test, deploy and provide ongoing support.',
  },
];
