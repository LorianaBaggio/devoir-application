import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularDirectivesPageRoutingModule } from './angular-directives-routing.module';

import { AngularDirectivesPage } from './angular-directives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularDirectivesPageRoutingModule
  ],
  declarations: [AngularDirectivesPage]
})
export class AngularDirectivesPageModule {}
