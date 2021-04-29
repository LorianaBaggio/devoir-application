import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularRessourcesPageRoutingModule } from './angular-ressources-routing.module';

import { AngularRessourcesPage } from './angular-ressources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularRessourcesPageRoutingModule
  ],
  declarations: [AngularRessourcesPage]
})
export class AngularRessourcesPageModule {}
