import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassCommandePage } from './sass-commande.page';

const routes: Routes = [
  {
    path: '',
    component: SassCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassCommandePageRoutingModule {}
