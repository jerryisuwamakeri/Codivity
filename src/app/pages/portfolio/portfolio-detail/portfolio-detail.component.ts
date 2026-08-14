import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IconComponent } from '../../../shared/icon/icon.component';
import { CtaBannerComponent } from '../../../shared/cta-banner/cta-banner.component';
import { PORTFOLIO } from '../../../core/data/clients.data';
import { PortfolioItem } from '../../../core/models/content.model';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, IconComponent, CtaBannerComponent],
  templateUrl: './portfolio-detail.component.html',
})
export class PortfolioDetailComponent implements OnInit {
  item?: PortfolioItem;
  otherProjects: PortfolioItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const item = PORTFOLIO.find((p) => p.slug === slug);

      if (!item) {
        this.router.navigate(['/portfolio']);
        return;
      }

      this.item = item;
      this.otherProjects = PORTFOLIO.filter((p) => p.slug !== slug).slice(0, 3);
      this.titleService.setTitle(`${item.title} — Codivity Portfolio`);
    });
  }
}
