import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsPage } from './contact-us.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContactUsPageRoutingModule } from './contact-us-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ContactUsPage }]),
    ContactUsPageRoutingModule,
  ],
  declarations: [ContactUsPage]
})
export class ContactUsModule {}
