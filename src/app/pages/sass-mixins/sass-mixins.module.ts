import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassMixinsPageRoutingModule } from './sass-mixins-routing.module';

import { SassMixinsPage } from './sass-mixins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassMixinsPageRoutingModule
  ],
  declarations: [SassMixinsPage]
})
export class SassMixinsPageModule {}
