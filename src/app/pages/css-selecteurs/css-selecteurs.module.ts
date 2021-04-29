import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssSelecteursPageRoutingModule } from './css-selecteurs-routing.module';

import { CssSelecteursPage } from './css-selecteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssSelecteursPageRoutingModule
  ],
  declarations: [CssSelecteursPage]
})
export class CssSelecteursPageModule {}
