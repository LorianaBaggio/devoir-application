import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressInstallationPageRoutingModule } from './wordpress-installation-routing.module';

import { WordpressInstallationPage } from './wordpress-installation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressInstallationPageRoutingModule
  ],
  declarations: [WordpressInstallationPage]
})
export class WordpressInstallationPageModule {}
