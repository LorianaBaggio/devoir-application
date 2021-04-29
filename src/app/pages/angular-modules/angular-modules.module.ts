import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularModulesPageRoutingModule } from './angular-modules-routing.module';

import { AngularModulesPage } from './angular-modules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularModulesPageRoutingModule
  ],
  declarations: [AngularModulesPage]
})
export class AngularModulesPageModule {}
