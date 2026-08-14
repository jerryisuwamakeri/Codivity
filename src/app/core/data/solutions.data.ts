import { Solution } from '../models/content.model';

export const SOLUTIONS: Solution[] = [
  {
    slug: 'marketplace-ecommerce',
    icon: 'building',
    iconBg: 'bg-brand-50 text-brand-600',
    name: 'Marketplace & E-commerce',
    summary:
      'Multi-vendor marketplaces and online stores built to handle catalogs, payments and logistics at scale.',
    heroDescription:
      'From storefront to checkout, we build marketplace platforms that make it easy for buyers and sellers to transact.',
    features: [
      'Multi-vendor storefronts & seller dashboards',
      'Product catalog & inventory management',
      'Secure checkout & payment integration',
      'Order tracking & fulfillment workflows',
    ],
    relatedClient: 'Tuwanx',
  },
  {
    slug: 'logistics-delivery',
    icon: 'truck',
    iconBg: 'bg-emerald-50 text-emerald-600',
    name: 'Logistics & Delivery',
    summary:
      'Dispatch and fleet platforms that connect riders, drivers and customers in real time.',
    heroDescription:
      'We build logistics platforms that coordinate dispatch, tracking and delivery — reliably, at scale.',
    features: [
      'Real-time dispatch & route optimization',
      'Live order & fleet tracking',
      'Rider and driver mobile apps',
      'Delivery analytics & reporting',
    ],
    relatedClient: 'QuickCarry',
  },
  {
    slug: 'fintech-payments',
    icon: 'wallet',
    iconBg: 'bg-violet-50 text-violet-600',
    name: 'Fintech & Payments',
    summary:
      'Secure, compliant financial platforms for payments, wallets and transaction management.',
    heroDescription:
      'We build fintech products with the security, compliance and reliability that money movement demands.',
    features: [
      'Digital wallets & payment processing',
      'Transaction monitoring & reconciliation',
      'KYC & compliance workflows',
      'Bank-grade security architecture',
    ],
    relatedClient: 'LonePay',
  },
  {
    slug: 'professional-services',
    icon: 'briefcase',
    iconBg: 'bg-sky-50 text-sky-600',
    name: 'Professional Services Platforms',
    summary:
      'Booking, client management and workflow tools for service-driven businesses.',
    heroDescription:
      'We build platforms that help service businesses manage clients, bookings and operations in one place.',
    features: [
      'Booking & scheduling systems',
      'Client relationship management',
      'Invoicing & payment workflows',
      'Team & resource management',
    ],
    relatedClient: 'Leviyah',
  },
  {
    slug: 'hospitality-leisure',
    icon: 'sparkles',
    iconBg: 'bg-amber-50 text-amber-600',
    name: 'Hospitality & Leisure',
    summary:
      'Booking and experience platforms for hotels, resorts and leisure businesses.',
    heroDescription:
      'We design digital experiences that make it effortless for guests to discover, book and enjoy.',
    features: [
      'Online booking & reservation systems',
      'Guest experience & loyalty tools',
      'Property & availability management',
      'Reviews & engagement features',
    ],
    relatedClient: 'Flip Side Leisure',
  },
  {
    slug: 'ticketing-events',
    icon: 'calendar-check',
    iconBg: 'bg-rose-50 text-rose-600',
    name: 'Ticketing & Events',
    summary:
      'End-to-end ticketing platforms for events, from listing to entry.',
    heroDescription:
      'We build ticketing platforms that make it simple to list events, sell tickets and manage entry on the day.',
    features: [
      'Event listings & ticket sales',
      'QR-code check-in & entry management',
      'Organizer dashboards & analytics',
      'Secure payment & payout handling',
    ],
    relatedClient: 'Spotlighticket',
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
