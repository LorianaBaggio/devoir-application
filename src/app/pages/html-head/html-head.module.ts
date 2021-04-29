import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlHeadPageRoutingModule } from './html-head-routing.module';

import { HtmlHeadPage } from './html-head.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlHeadPageRoutingModule
  ],
  declarations: [HtmlHeadPage]
})
export class HtmlHeadPageModule {}
