import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassInstallationPageRoutingModule } from './sass-installation-routing.module';

import { SassInstallationPage } from './sass-installation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassInstallationPageRoutingModule
  ],
  declarations: [SassInstallationPage]
})
export class SassInstallationPageModule {}
