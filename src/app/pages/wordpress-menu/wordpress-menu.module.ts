import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressMenuPageRoutingModule } from './wordpress-menu-routing.module';

import { WordpressMenuPage } from './wordpress-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressMenuPageRoutingModule
  ],
  declarations: [WordpressMenuPage]
})
export class WordpressMenuPageModule {}
