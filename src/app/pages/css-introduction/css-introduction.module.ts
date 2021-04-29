import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssIntroductionPageRoutingModule } from './css-introduction-routing.module';

import { CssIntroductionPage } from './css-introduction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssIntroductionPageRoutingModule
  ],
  declarations: [CssIntroductionPage]
})
export class CssIntroductionPageModule {}
