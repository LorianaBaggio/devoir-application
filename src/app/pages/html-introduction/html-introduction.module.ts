import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlIntroductionPageRoutingModule } from './html-introduction-routing.module';

import { HtmlIntroductionPage } from './html-introduction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlIntroductionPageRoutingModule
  ],
  declarations: [HtmlIntroductionPage]
})
export class HtmlIntroductionPageModule {}
