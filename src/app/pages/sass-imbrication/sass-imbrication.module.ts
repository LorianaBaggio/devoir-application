import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassImbricationPageRoutingModule } from './sass-imbrication-routing.module';

import { SassImbricationPage } from './sass-imbrication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassImbricationPageRoutingModule
  ],
  declarations: [SassImbricationPage]
})
export class SassImbricationPageModule {}
