import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlEditeurMacPageRoutingModule } from './html-editeur-mac-routing.module';

import { HtmlEditeurMacPage } from './html-editeur-mac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlEditeurMacPageRoutingModule
  ],
  declarations: [HtmlEditeurMacPage]
})
export class HtmlEditeurMacPageModule {}
