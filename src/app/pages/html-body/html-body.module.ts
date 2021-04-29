import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlBodyPageRoutingModule } from './html-body-routing.module';

import { HtmlBodyPage } from './html-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlBodyPageRoutingModule
  ],
  declarations: [HtmlBodyPage]
})
export class HtmlBodyPageModule {}
