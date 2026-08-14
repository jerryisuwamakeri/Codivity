import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon.component';
import { SERVICES } from '../../core/data/services.data';
import { PORTFOLIO } from '../../core/data/clients.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, RouterLink, IconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  services = SERVICES;
  portfolio = PORTFOLIO;
  currentYear = new Date().getFullYear();
}
