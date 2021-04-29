import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssBackgroundPageRoutingModule } from './css-background-routing.module';

import { CssBackgroundPage } from './css-background.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssBackgroundPageRoutingModule
  ],
  declarations: [CssBackgroundPage]
})
export class CssBackgroundPageModule {}
