import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularRessourcesPage } from './angular-ressources.page';

const routes: Routes = [
  {
    path: '',
    component: AngularRessourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRessourcesPageRoutingModule {}
