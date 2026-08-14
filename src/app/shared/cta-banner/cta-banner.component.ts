import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './cta-banner.component.html',
})
export class CtaBannerComponent {
  @Input() heading = "Let's Build Your Next Big Thing";
  @Input() subtext = 'Have a project in mind? Let’s bring your ideas to life.';
  @Input() buttonText = 'Get Started';
  @Input() buttonLink = '/contact';
  @Input() fullWidth = false;
  @Input() tone: 'blue' | 'navy' = 'blue';
}
