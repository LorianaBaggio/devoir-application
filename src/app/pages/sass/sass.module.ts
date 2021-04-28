import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassPageRoutingModule } from './sass-routing.module';

import { SassPage } from './sass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassPageRoutingModule
  ],
  declarations: [SassPage]
})
export class SassPageModule {}
