import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IconComponent } from '../../../shared/icon/icon.component';
import { CtaBannerComponent } from '../../../shared/cta-banner/cta-banner.component';
import { getSolutionBySlug, SOLUTIONS } from '../../../core/data/solutions.data';
import { PORTFOLIO } from '../../../core/data/clients.data';
import { Solution } from '../../../core/models/content.model';

@Component({
  selector: 'app-solution-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, IconComponent, CtaBannerComponent],
  templateUrl: './solution-detail.component.html',
})
export class SolutionDetailComponent implements OnInit {
  solution?: Solution;
  otherSolutions: Solution[] = [];
  caseStudySlug?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const solution = getSolutionBySlug(slug);

      if (!solution) {
        this.router.navigate(['/solutions']);
        return;
      }

      this.solution = solution;
      this.otherSolutions = SOLUTIONS.filter((s) => s.slug !== slug).slice(0, 3);
      this.caseStudySlug = PORTFOLIO.find((p) => p.client === solution.relatedClient)?.slug;
      this.titleService.setTitle(`${solution.name} — Codivity`);
    });
  }
}
