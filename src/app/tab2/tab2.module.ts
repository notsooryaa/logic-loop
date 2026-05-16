import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { HeaderComponent } from './header/header.component';
import { ExpertInsightModalComponent } from './expert-insight-modal/expert-insight-modal.component';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    Tab2PageRoutingModule,
    ExpertInsightModalComponent,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
