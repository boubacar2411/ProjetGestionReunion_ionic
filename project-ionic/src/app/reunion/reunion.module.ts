import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReunionPage } from './reunion.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReunionPageRoutingModule } from './reunion-routing.module';
import { QRCodeModule} from 'angularx-qrcode';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QRCodeModule,
    ExploreContainerComponentModule,
    ReunionPageRoutingModule
  ],
  declarations: [ReunionPage]
})


export class ReunionPageModule {}
