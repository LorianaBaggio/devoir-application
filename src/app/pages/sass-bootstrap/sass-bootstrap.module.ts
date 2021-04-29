import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassBootstrapPageRoutingModule } from './sass-bootstrap-routing.module';

import { SassBootstrapPage } from './sass-bootstrap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassBootstrapPageRoutingModule
  ],
  declarations: [SassBootstrapPage]
})
export class SassBootstrapPageModule {}
