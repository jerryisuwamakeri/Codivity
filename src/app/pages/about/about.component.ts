import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon.component';
import { CtaBannerComponent } from '../../shared/cta-banner/cta-banner.component';
import { TEAM } from '../../core/data/clients.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, IconComponent, CtaBannerComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  team = TEAM;

  values = [
    {
      icon: 'sparkles' as const,
      title: 'Innovation',
      description: 'We embrace creativity and cutting-edge technology to build future-ready solutions.',
    },
    {
      icon: 'star' as const,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality products and exceptional experiences.',
    },
    {
      icon: 'target' as const,
      title: 'Impact',
      description: 'We build solutions that help businesses grow and communities thrive.',
    },
  ];

  timeline = [
    {
      icon: 'sparkles' as const,
      year: 'Early 2026',
      description: 'Codivity was founded with a passion for solving real-world problems.',
    },
    {
      icon: 'users' as const,
      year: 'Mid 2026',
      description: 'Partnered with our first clients across marketplace, logistics and fintech.',
    },
    {
      icon: 'briefcase' as const,
      year: 'Today',
      description: 'Growing our team and shipping across web, mobile and backend engineering.',
    },
  ];
}
