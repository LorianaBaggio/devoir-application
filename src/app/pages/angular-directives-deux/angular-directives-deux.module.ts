import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularDirectivesDeuxPageRoutingModule } from './angular-directives-deux-routing.module';

import { AngularDirectivesDeuxPage } from './angular-directives-deux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularDirectivesDeuxPageRoutingModule
  ],
  declarations: [AngularDirectivesDeuxPage]
})
export class AngularDirectivesDeuxPageModule {}
