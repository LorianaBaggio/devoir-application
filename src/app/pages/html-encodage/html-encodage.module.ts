import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlEncodagePageRoutingModule } from './html-encodage-routing.module';

import { HtmlEncodagePage } from './html-encodage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlEncodagePageRoutingModule
  ],
  declarations: [HtmlEncodagePage]
})
export class HtmlEncodagePageModule {}
