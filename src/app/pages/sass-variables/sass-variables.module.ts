import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassVariablesPageRoutingModule } from './sass-variables-routing.module';

import { SassVariablesPage } from './sass-variables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassVariablesPageRoutingModule
  ],
  declarations: [SassVariablesPage]
})
export class SassVariablesPageModule {}
