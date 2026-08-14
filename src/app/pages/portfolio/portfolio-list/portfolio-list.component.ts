import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../shared/icon/icon.component';
import { CtaBannerComponent } from '../../../shared/cta-banner/cta-banner.component';
import { PORTFOLIO } from '../../../core/data/clients.data';
import { PortfolioItem } from '../../../core/models/content.model';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [NgFor, RouterLink, IconComponent, CtaBannerComponent],
  templateUrl: './portfolio-list.component.html',
})
export class PortfolioListComponent {
  portfolio = PORTFOLIO;
  categories: string[];
  activeCategory = 'All';

  constructor() {
    this.categories = ['All', ...new Set(PORTFOLIO.map((p) => p.category))];
  }

  get filtered(): PortfolioItem[] {
    return this.activeCategory === 'All'
      ? this.portfolio
      : this.portfolio.filter((p) => p.category === this.activeCategory);
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }
}
