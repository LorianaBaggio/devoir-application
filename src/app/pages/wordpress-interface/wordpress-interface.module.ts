import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressInterfacePageRoutingModule } from './wordpress-interface-routing.module';

import { WordpressInterfacePage } from './wordpress-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressInterfacePageRoutingModule
  ],
  declarations: [WordpressInterfacePage]
})
export class WordpressInterfacePageModule {}
