import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssFloatPageRoutingModule } from './css-float-routing.module';

import { CssFloatPage } from './css-float.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssFloatPageRoutingModule
  ],
  declarations: [CssFloatPage]
})
export class CssFloatPageModule {}
