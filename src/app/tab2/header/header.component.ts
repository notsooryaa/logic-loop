import { Component, Input } from '@angular/core';
import { IonHeader, IonIcon, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, IonIcon],
})
export class HeaderComponent {
  @Input() streak = '14 DAYS';
}
