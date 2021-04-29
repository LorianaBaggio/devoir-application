import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssCouleursPageRoutingModule } from './css-couleurs-routing.module';

import { CssCouleursPage } from './css-couleurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssCouleursPageRoutingModule
  ],
  declarations: [CssCouleursPage]
})
export class CssCouleursPageModule {}
