import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressBlogPageRoutingModule } from './wordpress-blog-routing.module';

import { WordpressBlogPage } from './wordpress-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressBlogPageRoutingModule
  ],
  declarations: [WordpressBlogPage]
})
export class WordpressBlogPageModule {}
