import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassConditionsPageRoutingModule } from './sass-conditions-routing.module';

import { SassConditionsPage } from './sass-conditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassConditionsPageRoutingModule
  ],
  declarations: [SassConditionsPage]
})
export class SassConditionsPageModule {}
