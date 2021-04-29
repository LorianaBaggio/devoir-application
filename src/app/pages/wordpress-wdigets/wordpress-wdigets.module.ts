import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressWdigetsPageRoutingModule } from './wordpress-wdigets-routing.module';

import { WordpressWdigetsPage } from './wordpress-wdigets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressWdigetsPageRoutingModule
  ],
  declarations: [WordpressWdigetsPage]
})
export class WordpressWdigetsPageModule {}
