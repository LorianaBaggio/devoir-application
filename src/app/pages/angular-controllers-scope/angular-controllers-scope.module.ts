import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularControllersScopePageRoutingModule } from './angular-controllers-scope-routing.module';

import { AngularControllersScopePage } from './angular-controllers-scope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularControllersScopePageRoutingModule
  ],
  declarations: [AngularControllersScopePage]
})
export class AngularControllersScopePageModule {}
