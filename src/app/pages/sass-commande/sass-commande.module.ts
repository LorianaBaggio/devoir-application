import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SassCommandePageRoutingModule } from './sass-commande-routing.module';

import { SassCommandePage } from './sass-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SassCommandePageRoutingModule
  ],
  declarations: [SassCommandePage]
})
export class SassCommandePageModule {}
