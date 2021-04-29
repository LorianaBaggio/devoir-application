import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassHeritagePageRoutingModule } from './sass-heritage-routing.module';

import { SassHeritagePage } from './sass-heritage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassHeritagePageRoutingModule
  ],
  declarations: [SassHeritagePage]
})
export class SassHeritagePageModule {}
