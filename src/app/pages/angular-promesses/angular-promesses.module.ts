import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularPromessesPageRoutingModule } from './angular-promesses-routing.module';

import { AngularPromessesPage } from './angular-promesses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularPromessesPageRoutingModule
  ],
  declarations: [AngularPromessesPage]
})
export class AngularPromessesPageModule {}
