import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicPartieDeuxPageRoutingModule } from './ionic-partie-deux-routing.module';

import { IonicPartieDeuxPage } from './ionic-partie-deux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPartieDeuxPageRoutingModule
  ],
  declarations: [IonicPartieDeuxPage]
})
export class IonicPartieDeuxPageModule {}
