import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularIntroductionPageRoutingModule } from './angular-introduction-routing.module';

import { AngularIntroductionPage } from './angular-introduction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularIntroductionPageRoutingModule
  ],
  declarations: [AngularIntroductionPage]
})
export class AngularIntroductionPageModule {}
