import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularRoutesPageRoutingModule } from './angular-routes-routing.module';

import { AngularRoutesPage } from './angular-routes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularRoutesPageRoutingModule
  ],
  declarations: [AngularRoutesPage]
})
export class AngularRoutesPageModule {}
