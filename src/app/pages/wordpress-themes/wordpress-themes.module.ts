import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressThemesPageRoutingModule } from './wordpress-themes-routing.module';

import { WordpressThemesPage } from './wordpress-themes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressThemesPageRoutingModule
  ],
  declarations: [WordpressThemesPage]
})
export class WordpressThemesPageModule {}
