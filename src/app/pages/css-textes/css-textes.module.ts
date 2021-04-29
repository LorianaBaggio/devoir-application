import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssTextesPageRoutingModule } from './css-textes-routing.module';

import { CssTextesPage } from './css-textes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssTextesPageRoutingModule
  ],
  declarations: [CssTextesPage]
})
export class CssTextesPageModule {}
