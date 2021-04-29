import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressEditeurPageRoutingModule } from './wordpress-editeur-routing.module';

import { WordpressEditeurPage } from './wordpress-editeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressEditeurPageRoutingModule
  ],
  declarations: [WordpressEditeurPage]
})
export class WordpressEditeurPageModule {}
