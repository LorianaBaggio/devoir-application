import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressIntroductionPageRoutingModule } from './wordpress-introduction-routing.module';

import { WordpressIntroductionPage } from './wordpress-introduction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressIntroductionPageRoutingModule
  ],
  declarations: [WordpressIntroductionPage]
})
export class WordpressIntroductionPageModule {}
