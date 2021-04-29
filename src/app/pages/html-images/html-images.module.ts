import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlImagesPageRoutingModule } from './html-images-routing.module';

import { HtmlImagesPage } from './html-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlImagesPageRoutingModule
  ],
  declarations: [HtmlImagesPage]
})
export class HtmlImagesPageModule {}
