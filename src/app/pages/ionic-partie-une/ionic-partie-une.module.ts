import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicPartieUnePageRoutingModule } from './ionic-partie-une-routing.module';

import { IonicPartieUnePage } from './ionic-partie-une.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPartieUnePageRoutingModule
  ],
  declarations: [IonicPartieUnePage]
})
export class IonicPartieUnePageModule {}
