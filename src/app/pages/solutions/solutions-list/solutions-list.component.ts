import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../shared/icon/icon.component';
import { CtaBannerComponent } from '../../../shared/cta-banner/cta-banner.component';
import { TrustedByComponent } from '../../../shared/trusted-by/trusted-by.component';
import { SOLUTIONS } from '../../../core/data/solutions.data';

@Component({
  selector: 'app-solutions-list',
  standalone: true,
  imports: [NgFor, RouterLink, IconComponent, CtaBannerComponent, TrustedByComponent],
  templateUrl: './solutions-list.component.html',
})
export class SolutionsListComponent {
  solutions = SOLUTIONS;
}
