import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlSyntaxePageRoutingModule } from './html-syntaxe-routing.module';

import { HtmlSyntaxePage } from './html-syntaxe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlSyntaxePageRoutingModule
  ],
  declarations: [HtmlSyntaxePage]
})
export class HtmlSyntaxePageModule {}
