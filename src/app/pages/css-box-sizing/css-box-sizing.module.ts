import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssBoxSizingPageRoutingModule } from './css-box-sizing-routing.module';

import { CssBoxSizingPage } from './css-box-sizing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssBoxSizingPageRoutingModule
  ],
  declarations: [CssBoxSizingPage]
})
export class CssBoxSizingPageModule {}
