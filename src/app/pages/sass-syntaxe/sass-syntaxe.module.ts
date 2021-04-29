import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassSyntaxePageRoutingModule } from './sass-syntaxe-routing.module';

import { SassSyntaxePage } from './sass-syntaxe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassSyntaxePageRoutingModule
  ],
  declarations: [SassSyntaxePage]
})
export class SassSyntaxePageModule {}
