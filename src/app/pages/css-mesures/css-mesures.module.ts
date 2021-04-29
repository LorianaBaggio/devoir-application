import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssMesuresPageRoutingModule } from './css-mesures-routing.module';

import { CssMesuresPage } from './css-mesures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssMesuresPageRoutingModule
  ],
  declarations: [CssMesuresPage]
})
export class CssMesuresPageModule {}
