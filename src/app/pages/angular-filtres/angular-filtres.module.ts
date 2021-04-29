import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularFiltresPageRoutingModule } from './angular-filtres-routing.module';

import { AngularFiltresPage } from './angular-filtres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFiltresPageRoutingModule
  ],
  declarations: [AngularFiltresPage]
})
export class AngularFiltresPageModule {}
