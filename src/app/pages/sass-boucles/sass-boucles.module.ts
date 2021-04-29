import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassBouclesPageRoutingModule } from './sass-boucles-routing.module';

import { SassBouclesPage } from './sass-boucles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassBouclesPageRoutingModule
  ],
  declarations: [SassBouclesPage]
})
export class SassBouclesPageModule {}
