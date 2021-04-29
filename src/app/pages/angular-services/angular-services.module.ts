import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularServicesPageRoutingModule } from './angular-services-routing.module';

import { AngularServicesPage } from './angular-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularServicesPageRoutingModule
  ],
  declarations: [AngularServicesPage]
})
export class AngularServicesPageModule {}
