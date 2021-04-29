import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressAccueilPageRoutingModule } from './wordpress-accueil-routing.module';

import { WordpressAccueilPage } from './wordpress-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressAccueilPageRoutingModule
  ],
  declarations: [WordpressAccueilPage]
})
export class WordpressAccueilPageModule {}
