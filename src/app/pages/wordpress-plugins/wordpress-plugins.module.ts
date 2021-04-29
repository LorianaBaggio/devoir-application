import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressPluginsPageRoutingModule } from './wordpress-plugins-routing.module';

import { WordpressPluginsPage } from './wordpress-plugins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressPluginsPageRoutingModule
  ],
  declarations: [WordpressPluginsPage]
})
export class WordpressPluginsPageModule {}
