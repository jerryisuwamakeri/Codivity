import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent, IconName } from '../../shared/icon/icon.component';

interface Faq {
  question: string;
  answer: string;
  icon: IconName;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, IconComponent],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  faqs: Faq[] = [
    {
      question: 'What services does Codivity offer?',
      answer:
        'We offer end-to-end digital product services: web development, mobile app development, backend & API development, UI/UX design, product strategy, and ongoing maintenance & support. See our Services page for details on each.',
      icon: 'layers',
      open: true,
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'It depends on scope. A marketing website usually takes 4-8 weeks, while a full product (web app, mobile app, or marketplace) typically runs 8-16 weeks from discovery to launch. We scope every project with a clear timeline before work begins.',
      icon: 'clock',
      open: false,
    },
    {
      question: 'Do you work with startups or only established businesses?',
      answer:
        'Both. We work with early-stage founders validating an idea through our Product Strategy service, as well as established businesses that need a new product built or an existing system maintained and scaled.',
      icon: 'users',
      open: false,
    },
    {
      question: 'What is your pricing model?',
      answer:
        'Most projects are scoped as a fixed-price engagement based on requirements gathered during discovery. For ongoing work — maintenance, support, or continuous feature development — we offer monthly retainers and support contracts with clear SLAs.',
      icon: 'wallet',
      open: false,
    },
    {
      question: 'Do you offer support after launch?',
      answer:
        'Yes. Our Maintenance & Support service covers bug fixes, security patching, server setup and monitoring, hosting management, and ongoing feature enhancements — available as a one-off engagement or a standing retainer contract.',
      icon: 'support',
      open: false,
    },
    {
      question: 'Which technologies do you work with?',
      answer:
        'We choose the right tool for the job — commonly Angular, React and Next.js on the frontend, Node.js and cloud-native backends (AWS, GCP, Azure), and Flutter or React Native for cross-platform mobile apps.',
      icon: 'code',
      open: false,
    },
    {
      question: 'How do we get started?',
      answer:
        'Reach out through our Contact page with a bit about your project. We will set up a short discovery call to understand your goals, then follow up with a scope, timeline and proposal.',
      icon: 'arrow-right',
      open: false,
    },
  ];

  toggle(faq: Faq) {
    faq.open = !faq.open;
  }
}
