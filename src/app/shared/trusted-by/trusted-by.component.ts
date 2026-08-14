import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { CLIENTS } from '../../core/data/clients.data';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [NgFor, IconComponent],
  templateUrl: './trusted-by.component.html',
})
export class TrustedByComponent {
  @Input() heading = 'Trusted by industry leaders';
  clients = CLIENTS;
}
