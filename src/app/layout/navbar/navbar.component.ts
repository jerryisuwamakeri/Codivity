import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon.component';
import { SERVICES } from '../../core/data/services.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgIf, SlicePipe, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  services = SERVICES;
  mobileOpen = false;
  servicesDropdownOpen = false;
  mobileServicesOpen = false;

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    if (!this.mobileOpen) {
      this.mobileServicesOpen = false;
    }
  }

  closeMobile() {
    this.mobileOpen = false;
    this.mobileServicesOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.servicesDropdownOpen = false;
    this.closeMobile();
  }
}
