import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExpertInsightModalComponent } from './expert-insight-modal/expert-insight-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private modalCtrl: ModalController) {}

  async openExpertInsight() {
    const modal = await this.modalCtrl.create({
      component: ExpertInsightModalComponent,
      initialBreakpoint: 0.92,
      breakpoints: [0, 0.92, 1],
      handleBehavior: 'cycle',
      cssClass: 'expert-insight-modal',
    });
    await modal.present();
  }

}
