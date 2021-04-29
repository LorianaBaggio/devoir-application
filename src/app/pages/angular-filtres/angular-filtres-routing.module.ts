import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFiltresPage } from './angular-filtres.page';

const routes: Routes = [
  {
    path: '',
    component: AngularFiltresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularFiltresPageRoutingModule {}
