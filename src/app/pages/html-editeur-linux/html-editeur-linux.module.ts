import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlEditeurLinuxPageRoutingModule } from './html-editeur-linux-routing.module';

import { HtmlEditeurLinuxPage } from './html-editeur-linux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlEditeurLinuxPageRoutingModule
  ],
  declarations: [HtmlEditeurLinuxPage]
})
export class HtmlEditeurLinuxPageModule {}
