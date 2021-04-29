import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressMediasPageRoutingModule } from './wordpress-medias-routing.module';

import { WordpressMediasPage } from './wordpress-medias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressMediasPageRoutingModule
  ],
  declarations: [WordpressMediasPage]
})
export class WordpressMediasPageModule {}
