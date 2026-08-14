import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconName } from './icon.types';
import { ICON_MAP, LUCIDE_ICON_SET } from './lucide-icons';

export type { IconName } from './icon.types';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <lucide-icon
      [img]="LUCIDE_ICON_SET[ICON_MAP[name]]"
      [size]="size"
      [strokeWidth]="strokeWidth"
      [class]="className"
    ></lucide-icon>
  `,
})
export class IconComponent {
  @Input() name: IconName = 'code';
  @Input() size = 24;
  @Input() strokeWidth = 1.8;
  @Input() className = '';

  protected readonly ICON_MAP = ICON_MAP;
  protected readonly LUCIDE_ICON_SET = LUCIDE_ICON_SET;
}
