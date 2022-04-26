import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesPage } from './services.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ServicesRoutingModule } from './services-routing.module';
import { LashServiceService } from 'src/services/lash-services/lash-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    ServicesRoutingModule
  ],
  providers: [
    LashServiceService
  ],
  declarations: [ServicesPage]
})
export class ServicesModule {}
