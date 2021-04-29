import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssPositionnementPageRoutingModule } from './css-positionnement-routing.module';

import { CssPositionnementPage } from './css-positionnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssPositionnementPageRoutingModule
  ],
  declarations: [CssPositionnementPage]
})
export class CssPositionnementPageModule {}
