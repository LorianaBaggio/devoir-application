import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlLiensPageRoutingModule } from './html-liens-routing.module';

import { HtmlLiensPage } from './html-liens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlLiensPageRoutingModule
  ],
  declarations: [HtmlLiensPage]
})
export class HtmlLiensPageModule {}
