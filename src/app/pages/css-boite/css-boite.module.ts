import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssBoitePageRoutingModule } from './css-boite-routing.module';

import { CssBoitePage } from './css-boite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssBoitePageRoutingModule
  ],
  declarations: [CssBoitePage]
})
export class CssBoitePageModule {}
