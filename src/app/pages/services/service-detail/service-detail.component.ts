import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IconComponent } from '../../../shared/icon/icon.component';
import { CtaBannerComponent } from '../../../shared/cta-banner/cta-banner.component';
import { getServiceBySlug, PROCESS_STEPS, SERVICES } from '../../../core/data/services.data';
import { Service } from '../../../core/models/content.model';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, IconComponent, CtaBannerComponent],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {
  service?: Service;
  processSteps = PROCESS_STEPS;
  otherServices: Service[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const service = getServiceBySlug(slug);

      if (!service) {
        this.router.navigate(['/services']);
        return;
      }

      this.service = service;
      this.otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
      this.titleService.setTitle(`${service.name} — Codivity`);
    });
  }
}
