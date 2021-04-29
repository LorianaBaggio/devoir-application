import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassIntroductionPageRoutingModule } from './sass-introduction-routing.module';

import { SassIntroductionPage } from './sass-introduction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassIntroductionPageRoutingModule
  ],
  declarations: [SassIntroductionPage]
})
export class SassIntroductionPageModule {}
