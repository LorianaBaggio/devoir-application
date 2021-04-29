import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlEditeurWindowsPageRoutingModule } from './html-editeur-windows-routing.module';

import { HtmlEditeurWindowsPage } from './html-editeur-windows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlEditeurWindowsPageRoutingModule
  ],
  declarations: [HtmlEditeurWindowsPage]
})
export class HtmlEditeurWindowsPageModule {}
