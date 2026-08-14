import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon.component';
import { TrustedByComponent } from '../../shared/trusted-by/trusted-by.component';
import { CtaBannerComponent } from '../../shared/cta-banner/cta-banner.component';
import { PROCESS_STEPS, SERVICES } from '../../core/data/services.data';
import { PORTFOLIO } from '../../core/data/clients.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, IconComponent, TrustedByComponent, CtaBannerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  services = SERVICES.slice(0, 4);
  recentProjects = PORTFOLIO.slice(0, 5);
  processSteps = PROCESS_STEPS;

  dashboardStats = [
    { label: 'Total Projects', value: '24', delta: '+18% from last month' },
    { label: 'Active Users', value: '1,024', delta: '+21% from last month' },
    { label: 'Completed', value: '89%', delta: '+12% from last month' },
    { label: 'Revenue', value: '₦12.4M', delta: '+15% from last month' },
  ];

  impactStats = [
    { value: '50+', label: 'Businesses trust us' },
    { value: '20+', label: 'Products launched' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Support available' },
  ];

  whyCodivity = [
    {
      icon: 'briefcase' as const,
      title: 'Engineering-led team',
      description: 'Every project is built and reviewed by hands-on engineers, not handed off to juniors.',
    },
    {
      icon: 'bolt' as const,
      title: 'Fast, iterative delivery',
      description: 'You see working software early and often, not just at the very end.',
    },
    {
      icon: 'shield' as const,
      title: 'Built to last',
      description: 'Clean, documented code and infrastructure that your team can maintain long-term.',
    },
    {
      icon: 'support' as const,
      title: 'Support after launch',
      description: 'We stay on after launch with maintenance retainers and support contracts.',
    },
  ];
}
