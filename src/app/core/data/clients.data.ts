import { Client, PortfolioItem, TeamMember } from '../models/content.model';

export const CLIENTS: Client[] = [
  { name: 'Tuwanx', icon: 'building' },
  { name: 'QuickCarry', icon: 'truck' },
  { name: 'LonePay', icon: 'wallet' },
  { name: 'Leviyah', icon: 'briefcase' },
  { name: 'Flip Side Leisure', icon: 'sparkles' },
  { name: 'Spotlighticket', icon: 'calendar-check' },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Jerry Isuwa Makeri',
    role: 'President & Head of Engineering',
    image: 'images/team/jerry.jpg',
    linkedin: 'https://www.linkedin.com/in/jerryisuwamakeri/',
    twitter: 'https://x.com/makerijerry',
    github: 'https://github.com/jerryisuwamakeri',
  },
  { name: 'Nathan Makeri', role: 'Developer', image: 'images/team/nathan.jpg' },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: 'tuwanx-marketplace',
    client: 'Tuwanx',
    title: 'Tuwanx Marketplace',
    category: 'Web & Mobile App',
    status: 'In Progress',
    summary:
      'A multi-vendor marketplace platform spanning a web storefront, seller dashboard and native buyer app.',
    description:
      'Tuwanx is more than a website — it is a full marketplace platform. We designed and built the web storefront and seller dashboard alongside a native iOS and Android buyer app, backed by a shared API so sellers, buyers and admins stay in sync across every surface.',
    results: [
      'Web storefront & seller dashboard',
      'Native iOS & Android buyer app',
      'Integrated payments & checkout',
      'Order & fulfillment tracking',
      'Admin panel for catalog & dispute management',
    ],
    icon: 'building',
    accent: 'bg-brand-50 text-brand-600',
  },
  {
    slug: 'quickcarry-dispatch',
    client: 'QuickCarry',
    title: 'QuickCarry Dispatch',
    category: 'Mobile App',
    status: 'Completed',
    summary: 'A real-time dispatch app connecting riders with delivery requests.',
    description:
      'A cross-platform mobile app for QuickCarry that handles live dispatch, route optimization and delivery tracking for riders and customers.',
    results: ['Real-time rider dispatch', 'Live order tracking', 'In-app earnings & payouts'],
    icon: 'truck',
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    slug: 'lonepay-platform',
    client: 'LonePay',
    title: 'LonePay Platform',
    category: 'Fintech Solution',
    status: 'In Progress',
    summary: 'A secure digital wallet and payments platform.',
    description:
      'We are building LonePay’s core wallet and payments infrastructure, with a focus on security, compliance and reliability.',
    results: ['Digital wallet & transfers', 'KYC & compliance workflows', 'Bank-grade security'],
    icon: 'wallet',
    accent: 'bg-violet-50 text-violet-600',
  },
  {
    slug: 'flip-side-leisure',
    client: 'Flip Side Leisure',
    title: 'Flip Side Leisure',
    category: 'Website Development',
    status: 'Completed',
    summary: 'A booking and discovery website for a leisure & hospitality brand.',
    description:
      'A modern marketing and booking website for Flip Side Leisure, designed to make it effortless for guests to discover and reserve experiences.',
    results: ['Online booking & reservations', 'Experience discovery pages', 'Mobile-first design'],
    icon: 'sparkles',
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    slug: 'spotlighticket',
    client: 'Spotlighticket',
    title: 'Spotlighticket',
    category: 'Ticketing Platform',
    status: 'In Progress',
    summary: 'An end-to-end event ticketing and check-in platform.',
    description:
      'We are building Spotlighticket’s ticketing platform, from event listings and ticket sales to QR check-in on event day.',
    results: ['Event listings & ticket sales', 'QR-code check-in', 'Organizer analytics dashboard'],
    icon: 'calendar-check',
    accent: 'bg-rose-50 text-rose-600',
  },
  {
    slug: 'leviyah',
    client: 'Leviyah',
    title: 'Leviyah Client Portal',
    category: 'Web Application',
    status: 'Completed',
    summary: 'An E-commerce Web-App with booking and client management portal for a professional services brand.',
    description:
      'A client portal for Leviyah that streamlines booking, scheduling and client communication in one platform.',
    results: ['Client booking & scheduling', 'Automated invoicing', 'Centralized client records'],
    icon: 'briefcase',
    accent: 'bg-sky-50 text-sky-600',
  },
];
