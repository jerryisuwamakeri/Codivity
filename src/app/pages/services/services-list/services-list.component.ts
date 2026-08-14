import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../shared/icon/icon.component';
import { CtaBannerComponent } from '../../../shared/cta-banner/cta-banner.component';
import { TrustedByComponent } from '../../../shared/trusted-by/trusted-by.component';
import { SERVICES } from '../../../core/data/services.data';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [NgFor, RouterLink, IconComponent, CtaBannerComponent, TrustedByComponent],
  templateUrl: './services-list.component.html',
})
export class ServicesListComponent {
  services = SERVICES;
}
